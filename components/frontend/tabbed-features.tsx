import {
  BarChart2,
  DollarSign,
  GraduationCap,
  Users,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "./section-header";

const features = [
  {
    icon: Users,
    tab: "Estudiantes",
    title: "Gestión de Estudiantes",
    description:
      "Sistema integral de información estudiantil para gestionar matrículas, perfiles y registros académicos con facilidad",
    href: "/features/gestion-estudiantes",
    subFeatures: [
      "Perfiles digitales de estudiantes con historial académico completo",
      "Proceso de inscripción y registro automatizado",
      "Acceso al portal para padres con actualizaciones en tiempo real",
      "Seguimiento del desempeño estudiantil y análisis",
      "Gestión digital de documentos para registros estudiantiles",
      "Campos personalizados para información adicional del estudiante",
      "Capacidades de importación/exportación masiva de datos estudiantiles",
      "Seguimiento de comportamiento y registros disciplinarios de los estudiantes",
    ],
    image: "/images/placeholder.png",
  },
  {
    icon: GraduationCap,
    tab: "Académica",
    title: "Gestión Académica",
    description:
      "Optimiza la planificación curricular, exámenes, calificaciones y generación de boletas en un sistema unificado",
    href: "/features/gestion-academica",
    subFeatures: [
      "Gestión dinámica de planes de estudio y programas académicos",
      "Cálculo automatizado de calificaciones y seguimiento del GPA",
      "Generación personalizada de boletines de notas",
      "Gestión de tareas y deberes escolares",
      "Sistema de exámenes en línea con múltiples tipos de preguntas",
      "Gestión del calendario académico",
      "Programación de cursos y clases",
      "Distribución de recursos educativos",
    ],
    image: "/images/placeholder1.png",
  },
  {
    icon: DollarSign,
    title: "Gestión Financiera",
    tab: "Finanzas",
    description:
      "Sistema completo de gestión de pagos con opciones en línea, facturación y reportes financieros detallados",
    href: "/features/finanzas",
    subFeatures: [
      "Integración con pasarela de pago en línea",
      "Generación automatizada de facturas",
      "Sistema de recordatorios de pago",
      "Informes financieros y análisis",
      "Gestión de salarios y nóminas",
      "Seguimiento de gastos y presupuestos",
      "Gestión de becas",
      "Soporte para múltiples métodos de pago",
    ],
    image: "/images/placeholder3.png",
  },
  {
    icon: BarChart2,
    tab: "Analíticas",
    title: "Analíticas e Informes",
    description:
      "Herramientas analíticas potentes para decisiones basadas en datos con reportes personalizables e insights",
    href: "/features/analitica",
    subFeatures: [
      "Panel personalizable con métricas clave",
      "Análisis de tendencias de rendimiento",
      "Estadísticas de asistencia y matrículas",
      "Información financiera y proyecciones",
      "Seguimiento del progreso estudiantil",
      "Análisis del desempeño del personal",
      "Generación de informes personalizados",
      "Exportación de datos en múltiples formatos",
    ],
    image: "/images/placeholder7.png",
  },
];

export default function TabbedFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="py-8">
        <SectionHeader
          title="Características Adicionales"
          heading="Plataforma todo-en-uno de gestión escolar"
          description="Optimiza toda la operación de tu escuela con nuestra completa suite de módulos integrados diseñados específicamente para instituciones educativas modernas"
        />
      </div>
      <Tabs defaultValue={features[0].tab.toLowerCase()} className="space-y-8">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b-bg-transparent p-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsTrigger
                key={feature.tab}
                value={feature.tab.toLowerCase()}
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-4 pb-4 pt-2 data-[state=active]:border-primary">
                <Icon className="h-5 w-5" />
                {feature.tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {features.map((feature) => (
          <TabsContent
            key={feature.tab}
            value={feature.tab.toLowerCase()}
            className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
                <Card>
                  <CardContent className="grid gap-4 p-6">
                    {feature.subFeatures.map((subFeature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {index + 1}
                        </div>
                        <span>{subFeature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Button asChild>
                  <Link href={feature.href}>
                    Más información sobre {feature.title}
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-square">
                <Image
                  src={feature.image}
                  alt={`${feature.title} illustration`}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
