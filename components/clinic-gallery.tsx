"use client";

import Image from "next/image";
import * as React from "react";
import { Expand, Images } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const clinicPhotos = [
  { src: "/apice/clinica/clinica-01.webp", alt: "Recepção e área de atendimento da Ápice Saúde", width: 1600, height: 1065 },
  { src: "/apice/clinica/clinica-02.webp", alt: "Consultório médico da Ápice Saúde", width: 1600, height: 1065 },
  { src: "/apice/clinica/clinica-03.webp", alt: "Sala de exames e procedimentos da Ápice Saúde", width: 1600, height: 1065 },
  { src: "/apice/clinica/clinica-04.webp", alt: "Centro de procedimentos da Ápice Saúde", width: 1600, height: 854 },
  { src: "/apice/clinica/clinica-05.webp", alt: "Sala de recuperação da Ápice Saúde", width: 1600, height: 1066 },
  { src: "/apice/clinica/clinica-06.webp", alt: "Estrutura clínica para procedimentos da Ápice Saúde", width: 1600, height: 1066 },
  { src: "/apice/clinica/clinica-07.webp", alt: "Equipamento de tomografia da Ápice Saúde", width: 1600, height: 1065 },
  { src: "/apice/clinica/clinica-08.webp", alt: "Sala de radiologia da Ápice Saúde", width: 1600, height: 1065 },
  { src: "/apice/clinica/clinica-09.webp", alt: "Sala de ultrassonografia da Ápice Saúde", width: 1600, height: 1065 },
];

export function ClinicGallery() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => api.scrollNext(), 5200);
    return () => window.clearInterval(timer);
  }, [api, paused]);

  return (
    <section
      className="mt-16 overflow-hidden rounded-[32px] border border-slate-100 bg-white px-5 py-9 shadow-lg shadow-navy/6 sm:px-10 sm:py-12"
      aria-labelledby="clinic-gallery-title"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-orange-soft text-orange">
          <Images className="size-5" />
        </span>
        <p className="eyebrow mt-5">Nossa estrutura</p>
        <h2 id="clinic-gallery-title" className="section-title">Conheça nossa clínica</h2>
        <p className="section-subtitle mx-auto">
          Veja alguns dos ambientes preparados para oferecer cuidado, conforto e segurança.
        </p>
      </div>

      <Carousel
        className="mx-auto mt-9 max-w-6xl px-8 sm:px-10"
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
        }}
      >
        <CarouselContent className="-ml-3">
          {clinicPhotos.map((photo, index) => (
            <CarouselItem key={photo.src} className="basis-[84%] pl-3 sm:basis-1/2 lg:basis-1/3">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 text-left shadow-sm outline-none transition hover:-translate-y-1 hover:shadow-xl focus-visible:ring-3 focus-visible:ring-orange/40"
                    aria-label={`Ampliar foto ${index + 1}: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 639px) 84vw, (max-width: 1023px) 45vw, 360px"
                      className="object-cover transition duration-500 group-hover:scale-[1.035]"
                    />
                    <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-navy/90 text-white shadow-lg transition group-hover:bg-orange">
                      <Expand className="size-4" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="flex max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-6xl items-center justify-center overflow-hidden border-0 bg-slate-950 p-3 shadow-2xl sm:p-5">
                  <DialogTitle className="sr-only">Foto ampliada da clínica</DialogTitle>
                  <DialogDescription className="sr-only">{photo.alt}</DialogDescription>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="95vw"
                    className="h-auto max-h-[calc(100dvh-4rem)] w-auto max-w-full rounded-lg object-contain"
                    priority
                  />
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-slate-200 bg-white text-navy shadow-md hover:bg-navy hover:text-white" />
        <CarouselNext className="right-0 border-slate-200 bg-white text-navy shadow-md hover:bg-navy hover:text-white" />
      </Carousel>

      <p className="mt-6 text-center text-sm font-semibold text-slate-500">
        Selecione uma foto para ampliar.
      </p>
    </section>
  );
}
