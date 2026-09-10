import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export function ServiceCard({ icon: Icon, title, description, href, eyebrow }: { icon: LucideIcon; title: string; description: string; href: string; eyebrow?: string }) {
  return <Link href={href} className="group w-full rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_40px_rgba(15,40,111,.06)] transition duration-300 hover:-translate-y-1 hover:border-orange/25 hover:shadow-[0_18px_50px_rgba(15,40,111,.11)] sm:text-left"><div className="mb-7 flex items-start justify-between"><span className="grid size-13 place-items-center rounded-2xl bg-orange-soft text-orange transition group-hover:bg-orange group-hover:text-white"><Icon className="size-6" /></span><ArrowUpRight className="size-5 text-slate-300 transition group-hover:text-orange" /></div>{eyebrow && <p className="mb-2 text-xs font-extrabold uppercase tracking-[.16em] text-orange">{eyebrow}</p>}<h3 className="text-xl font-black tracking-tight text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></Link>;
}
