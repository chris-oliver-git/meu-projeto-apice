"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, X } from "lucide-react";

export function EzChatHint() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [closeHost, setCloseHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let host: HTMLDivElement | null = null;
    const timer = window.setTimeout(() => setVisible(true), 900);
    const ensureCloseHost = () => {
      const widget = document.getElementById("EZchatWidget");
      if (!widget) return;

      if (!host) {
        host = document.createElement("div");
        host.id = "apice-ezchat-close-host";
        document.body.appendChild(host);
        setCloseHost(host);
      }

      const hostIsAfterWidget = Boolean(
        widget.compareDocumentPosition(host) & Node.DOCUMENT_POSITION_FOLLOWING,
      );

      if (!hostIsAfterWidget) document.body.appendChild(host);
    };
    const syncChatState = () => {
      ensureCloseHost();
      const frame = document.querySelector<HTMLIFrameElement>(
        '#EZchatWidget iframe[title="mainFrame"]',
      );

      setChatOpen(Boolean(frame && frame.getAttribute("width") !== "0"));
    };
    const hideWhenChatOpens = () => {
      setVisible(false);
      setChatOpen(true);
    };
    const showWhenChatCloses = () => setChatOpen(false);
    const observer = new MutationObserver(syncChatState);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["height", "style", "width"],
      childList: true,
      subtree: true,
    });

    window.addEventListener("apice:ezchat-opened", hideWhenChatOpens);
    window.addEventListener("apice:ezchat-closed", showWhenChatCloses);
    syncChatState();

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("apice:ezchat-opened", hideWhenChatOpens);
      window.removeEventListener("apice:ezchat-closed", showWhenChatCloses);
      host?.remove();
    };
  }, []);

  function dismiss() {
    setVisible(false);
  }

  function openChat() {
    const chatButton = document.querySelector<HTMLButtonElement>(
      '#EZchatWidget button[data-testid="bubbleBtn"]',
    );

    if (chatButton) {
      chatButton.click();
      window.dispatchEvent(new Event("apice:ezchat-opened"));
    }
  }

  function closeChat() {
    const ezChat = (
      window as Window & { ezchat?: { close?: () => void } }
    ).ezchat;

    if (ezChat?.close) {
      ezChat.close();
    } else {
      document
        .querySelector<HTMLButtonElement>(
          '#EZchatWidget button[data-testid="bubbleBtn"]',
        )
        ?.click();
    }

    setChatOpen(false);
    window.dispatchEvent(new Event("apice:ezchat-closed"));
  }

  return (
    <>
      <aside
        aria-live="polite"
        aria-label="Atalho para agendamento"
        className={`fixed bottom-[36px] right-[104px] z-[2147483646] max-w-[260px] transition-all duration-500 ease-out max-sm:bottom-[88px] max-sm:right-3 max-sm:max-w-[calc(100vw-24px)] ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="relative rounded-2xl border border-orange/20 bg-white p-2 pr-10 shadow-2xl shadow-navy/20">
          <button
            type="button"
            onClick={openChat}
            className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-black text-navy transition hover:bg-orange-soft hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-white">
              <CalendarDays className="size-4" aria-hidden="true" />
            </span>
            <span>Agende seu atendimento aqui</span>
          </button>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Fechar aviso de agendamento"
            className="absolute right-2 top-2 grid size-7 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </aside>

      {closeHost
        ? createPortal(
            <button
              type="button"
              onClick={closeChat}
              aria-label="Fechar atendimento e voltar ao site"
              aria-hidden={!chatOpen}
              tabIndex={chatOpen ? 0 : -1}
              title="Fechar atendimento"
              className={`ez-chat-close grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-xl transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                chatOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-90 opacity-0"
              }`}
            >
              <X className="size-6" aria-hidden="true" />
            </button>,
            closeHost,
          )
        : null}
    </>
  );
}
