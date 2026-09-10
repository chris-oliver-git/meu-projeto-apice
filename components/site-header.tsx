"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [["Serviços", "/servicos"], ["Unidades", "/unidades"], ["Corpo clínico", "/corpo-clinico"], ["Institucional", "/institucional"]];

export function SiteHeader() {
  return <>
    <div className="bg-navy text-white"><div className="site-container flex min-h-10 items-center justify-center gap-4 py-2 text-center text-xs font-semibold sm:justify-between sm:text-left sm:text-sm"><p className="flex items-center justify-center gap-2"><Stethoscope className="size-4 shrink-0 text-orange" /> Cuidado integrado em saúde no Rio de Janeiro</p><a className="hidden text-white/80 hover:text-white sm:block" href="tel:+552136683131">Central: (21) 3668-3131</a></div></div>
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link href="/" aria-label="Ápice Saúde — página inicial" className="shrink-0 py-2"><Image src="/apice/logo-primary.png" alt="Ápice Saúde" width={260} height={52} className="h-10 w-auto object-contain sm:h-12" priority /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-0.5 min-[1120px]:flex">{navigation.map(([label, href]) => <Link key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-bold text-navy transition hover:bg-orange-soft hover:text-orange">{label}</Link>)}</nav>
        <div className="hidden items-center gap-2 min-[1120px]:flex"><Button asChild variant="outline" className="h-11 rounded-xl border-slate-200 px-4 font-bold text-navy hover:border-navy hover:bg-navy hover:text-white"><Link href="/resultados">Resultados</Link></Button><Button asChild className="h-11 rounded-xl bg-orange px-5 font-extrabold text-white shadow-lg shadow-orange/20 hover:bg-orange-hover"><a href="https://wa.me/552136683131" target="_blank" rel="noopener noreferrer"><MessageCircle /> Agendar</a></Button></div>
        <Sheet><SheetTrigger asChild><Button variant="outline" size="icon-lg" className="rounded-xl border-slate-200 text-navy min-[1120px]:hidden" aria-label="Abrir menu"><Menu className="size-5" /></Button></SheetTrigger><SheetContent className="w-[88%] bg-white p-0 sm:max-w-md"><SheetHeader className="border-b border-slate-100 p-6 text-center sm:text-left"><SheetTitle className="text-xl font-black text-navy">Navegue pela Ápice</SheetTitle><SheetDescription>Encontre serviços, unidades e canais de atendimento.</SheetDescription></SheetHeader><nav className="flex flex-col gap-1 p-5 text-center" aria-label="Navegação móvel">{[["Início", "/"], ...navigation, ["Resultados", "/resultados"], ["Contato", "/contato"]].map(([label, href]) => <SheetClose asChild key={href}><Link href={href} className="rounded-xl px-4 py-3.5 font-bold text-navy hover:bg-orange-soft hover:text-orange">{label}</Link></SheetClose>)}</nav><div className="mt-auto p-5"><Button asChild className="h-12 w-full rounded-xl bg-orange font-extrabold text-white hover:bg-orange-hover"><a href="https://wa.me/552136683131" target="_blank" rel="noopener noreferrer"><MessageCircle /> Agendar atendimento</a></Button></div></SheetContent></Sheet>
      </div>
    </header>
  </>;
}
