import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SmallTitle from "./small-title";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <SmallTitle title="Bienvenido a SchoolPro" />

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
          Su solución completa de gestión escolar
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
          Potencie su institución educativa con una plataforma todo en uno que
          agiliza la administración, mejora la comunicación e impulsa el éxito
          de los estudiantes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-full h-12 px-6 text-base">
            Empezar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6 text-base">
            Ver todas las funciones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
