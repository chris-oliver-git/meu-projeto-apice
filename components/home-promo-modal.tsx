"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const CHAT_BUTTON_SELECTOR =
  '#EZchatWidget button[data-testid="bubbleBtn"]';

export function HomePromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("apice-promo-open", open);
    window.dispatchEvent(
      new Event(open ? "apice:promo-opened" : "apice:promo-closed"),
    );

    return () => document.body.classList.remove("apice-promo-open");
  }, [open]);

  function openSchedulingChat() {
    setOpen(false);

    let attempts = 0;
    const tryToOpenChat = () => {
      attempts += 1;
      const chatButton =
        document.querySelector<HTMLButtonElement>(CHAT_BUTTON_SELECTOR);

      if (chatButton) {
        chatButton.click();
        window.dispatchEvent(new Event("apice:ezchat-opened"));
        return;
      }

      if (attempts < 12) window.setTimeout(tryToOpenChat, 250);
    };

    window.setTimeout(tryToOpenChat, 250);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        aria-describedby="home-promo-description"
        className="home-promo-dialog max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[420px] gap-3 overflow-hidden rounded-[28px] border-0 bg-white p-3 shadow-2xl sm:p-4"
      >
        <DialogTitle className="sr-only">
          Consultas na Policlínica Ápice Saúde
        </DialogTitle>
        <DialogDescription id="home-promo-description" className="sr-only">
          Consulta por noventa reais, com pagamento em dinheiro ou Pix.
        </DialogDescription>

        <div className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-[20px] bg-slate-50">
          <Image
            src="/apice/banner-consulta-90.jpeg"
            alt="Policlínica Ápice Saúde: consulta por R$ 90,00, com pagamento em dinheiro ou Pix, nas unidades de São João de Meriti e Duque de Caxias"
            width={1080}
            height={1350}
            priority
            sizes="(max-width: 639px) calc(100vw - 64px), 388px"
            className="h-auto max-h-[calc(100dvh-132px)] w-auto max-w-full object-contain"
          />

          <DialogClose asChild>
            <button
              type="button"
              aria-label="Fechar anúncio"
              title="Fechar anúncio"
              className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-white/70 bg-white/95 text-navy shadow-lg backdrop-blur transition hover:scale-105 hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </DialogClose>
        </div>

        <button
          type="button"
          onClick={openSchedulingChat}
          className="flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-orange px-5 py-3 text-center text-base font-black text-white shadow-lg shadow-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          <CalendarDays className="size-5 shrink-0" aria-hidden="true" />
          <span>Quero agendar meu atendimento</span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
