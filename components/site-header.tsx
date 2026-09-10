"use client";

import Image from "next/image";
import { Menu, MessageCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [["Serviços", "/servicos"], ["Unidades", "/unidades"], ["Corpo clínico", "/corpo-clinico"], ["Institucional", "/institucional"]];

function openInternalPage(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault();

  if (window.location.pathname === href) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (document.body.dataset.navigating === "true") return;

  document.body.dataset.navigating = "true";
  document.body.classList.add("page-is-leaving");

  window.setTimeout(() => {
    window.location.assign(href);
  }, 280);
}

export function SiteHeader() {
  return <>
    <div className="bg-navy text-white"><div className="site-container flex min-h-10 items-center justify-between gap-4 py-2 text-xs font-semibold sm:text-sm"><p className="flex items-center gap-2"><Stethoscope className="size-4 text-orange" /> Cuidado integrado em saúde no Rio de Janeiro</p><a className="hidden text-white/80 hover:text-white sm:block" href="tel:2136683131">Central: (21) 3668-3131</a></div></div>
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <a href="/" onClick={(event) => openInternalPage(event, "/")} aria-label="Ápice Saúde — página inicial" className="shrink-0 py-2"><Image src="/apice/logo-primary.png" alt="Ápice Saúde" width={260} height={52} className="h-10 w-auto object-contain sm:h-12" priority /></a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 xl:flex">{navigation.map(([label, href]) => <a key={href} href={href} onClick={(event) => openInternalPage(event, href)} className="rounded-xl px-3.5 py-2.5 text-sm font-bold text-navy transition hover:bg-orange-soft hover:text-orange">{label}</a>)}</nav>
        <div className="hidden items-center gap-2 xl:flex"><Button asChild variant="outline" className="h-11 rounded-xl border-slate-200 px-4 font-bold text-navy hover:border-navy hover:bg-navy hover:text-white"><a href="/resultados" onClick={(event) => openInternalPage(event, "/resultados")}>Resultados</a></Button><Button asChild className="h-11 rounded-xl bg-orange px-5 font-extrabold text-white shadow-lg shadow-orange/20 hover:bg-orange-hover"><a href="https://wa.me/552136683131" target="_blank" rel="noreferrer"><MessageCircle /> Agendar</a></Button></div>
        <Sheet><SheetTrigger asChild><Button variant="outline" size="icon-lg" className="rounded-xl border-slate-200 text-navy xl:hidden" aria-label="Abrir menu"><Menu className="size-5" /></Button></SheetTrigger><SheetContent className="w-[88%] bg-white p-0 sm:max-w-md"><SheetHeader className="border-b border-slate-100 p-6 text-left"><SheetTitle className="text-xl font-black text-navy">Navegue pela Ápice</SheetTitle><SheetDescription>Encontre serviços, unidades e canais de atendimento.</SheetDescription></SheetHeader><nav className="flex flex-col gap-1 p-5" aria-label="Navegação móvel">{[["Início", "/"], ...navigation, ["Resultados", "/resultados"], ["Contato", "/contato"]].map(([label, href]) => <SheetClose asChild key={href}><a href={href} onClick={(event) => openInternalPage(event, href)} className="rounded-xl px-4 py-3.5 font-bold text-navy hover:bg-orange-soft hover:text-orange">{label}</a></SheetClose>)}</nav><div className="mt-auto p-5"><Button asChild className="h-12 w-full rounded-xl bg-orange font-extrabold text-white hover:bg-orange-hover"><a href="https://wa.me/552136683131" target="_blank" rel="noreferrer"><MessageCircle /> Agendar atendimento</a></Button></div></SheetContent></Sheet>
      </div>
    </header>
  </>;
}
