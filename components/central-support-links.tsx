"use client";

import Link from "next/link";
import { openSchedulingChat } from "@/lib/ezchat";
import { ArrowRight } from "lucide-react";

const linkClass =
  "flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3 text-left text-sm font-bold shadow-sm transition hover:border-orange/30 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

export function CentralSupportLinks() {
  return (
    <div className="mt-6 space-y-3">
      <button type="button" onClick={openSchedulingChat} className={linkClass}>
        <span>Agendar uma consulta</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>

      <Link href="/exames" className={linkClass}>
        <span>Informações sobre exames</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>

      <Link href="/planos" className={linkClass}>
        <span>Conhecer nossos planos</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
