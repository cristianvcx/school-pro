"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DollarSign,
  Bell,
  Menu,
  Users,
  GraduationCap,
  MessageSquare,
  ClipboardList,
  Bus,
  BarChart2,
  BookOpen,
  CalendarDays,
  FileText,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";

const features = [
  {
    icon: Users,
    title: "Gestión de Estudiantes",
    description:
      "Sistema integral de información estudiantil para gestionar matrículas, perfiles y registros académicos con facilidad",
    href: "/features/gestion-estudiantes",
  },
  {
    icon: GraduationCap,
    title: "Gestión Académica",
    description:
      "Optimiza la planificación curricular, exámenes, calificaciones y generación de boletas en un sistema unificado",
    href: "/features/gestion-academica",
  },
  {
    icon: MessageSquare,
    title: "Centro de Comunicación",
    description:
      "Sistema de mensajería integrado con notificaciones multicanal para una comunicación escolar fluida",
    href: "/features/comunicacion",
  },
  {
    icon: DollarSign,
    title: "Gestión Financiera",
    description:
      "Sistema completo de gestión de pagos con opciones en línea, facturación y reportes financieros detallados",
    href: "/features/finanzas",
  },
  {
    icon: ClipboardList,
    title: "Gestión de Personal",
    description:
      "Herramientas eficientes para gestionar registros de personal, asistencia, evaluación de desempeño y nómina",
    href: "/features/gestion-personal",
  },
  {
    icon: Bus,
    title: "Gestión de Transporte",
    description:
      "Seguimiento en tiempo real del transporte, gestión de rutas y notificaciones automáticas para un traslado seguro",
    href: "/features/transporte",
  },
  {
    icon: BarChart2,
    title: "Análisis y Reportes",
    description:
      "Herramientas analíticas potentes para decisiones basadas en datos con reportes personalizables e insights",
    href: "/features/analitica",
  },
  {
    icon: BookOpen,
    title: "Gestión de Recursos",
    description:
      "Sistema de biblioteca digital, seguimiento de inventarios y programación de instalaciones en una plataforma integrada",
    href: "/features/recursos",
  },
  {
    icon: CalendarDays,
    title: "Sistema de Asistencia",
    description:
      "Seguimiento automatizado de asistencia para estudiantes y personal con capacidades de notificación instantánea",
    href: "/features/asistencia",
  },
  {
    icon: FileText,
    title: "Portal de Exámenes",
    description:
      "Sistema completo de gestión de exámenes desde la programación hasta la publicación de resultados con acceso seguro",
    href: "/features/examenes",
  },
  {
    icon: Bell,
    title: "Tablero de Anuncios",
    description:
      "Tablero digital de anuncios, eventos y actualizaciones importantes con distribución segmentada",
    href: "/features/anuncios",
  },
  {
    icon: Shield,
    title: "Seguridad y Acceso",
    description:
      "Control de acceso basado en roles con cifrado de datos y respaldos seguros para una tranquilidad total",
    href: "/features/seguridad",
  },
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Características</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h4 className="text-lg font-medium">Características</h4>
                      <Link
                        href="/features"
                        className="text-sm text-blue-500 hover:underline">
                        Ver todo
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block group">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                              <feature.icon className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Empezar</h4>
                          <p className="text-sm text-muted-foreground">
                            Their food sources have decreased, and their numbers
                          </p>
                        </div>
                        <Button variant="secondary">
                          <Link href="/contact-us">Empezar</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Precios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Así Funciona
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link href={"/login"}>Acceder</Link>
          </Button>
          <Button>
            <Link href="/contact-us">Reservar Demostracion</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left">Menú de Navegación</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-4">
              <Link
                href="/"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}>
                Inicio
              </Link>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                onClick={() => setShowFeatures(!showFeatures)}>
                Características
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-4">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}>
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/#precing"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}>
                Precios
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}>
                Así funciona
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}>
                  Acceder
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Crear Cuenta
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
