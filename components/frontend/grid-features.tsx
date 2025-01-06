import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";
const features = [
  {
    title: "Sistema de información Estudiantil",
    description:
      "Gestión centralizada de datos estudiantiles con inscripción digital, seguimiento de perfiles y registros académicos en un solo lugar seguro.",
    icon: Users,
    image: "/images/placeholder.png",
  },
  {
    title: "Conjunto para la Excelencia Académica",
    description:
      "Herramientas completas para la planificación del currículo, gestión de exámenes y calificaciones automatizadas con análisis detallados de desempeño",
    icon: GraduationCap,
    image: "/images/placeholder1.png",
  },
  {
    title: "Centro de Comunicación Inteligente",
    description:
      "Plataforma de mensajería multicanal que conecta a profesores, padres y estudiantes con notificaciones y actualizaciones en tiempo real",
    image: "/images/placeholder2.png",
  },
  {
    title: "Centro de Gestión Financiera",
    description:
      "Recaudación de tarifas simplificada, facturación automatizada e informes financieros completos con procesamiento de pagos seguro.",
    icon: DollarSign,
    image: "/images/placeholder.png",
  },
  {
    title: "Gestion de Personal y Recursos Humanos",
    description:
      "Administración completa del personal con seguimiento de asistencia, gestión del desempeño y procesamiento automatizado de nóminas.",
    icon: ClipboardList,
    image: "/images/placeholder.png",
  },
  {
    title: "Control de Transporte y Seguridad",
    description:
      "Seguimiento en tiempo real de flotas, optimización de rutas y notificaciones automáticas para los padres, garantizando un transporte estudiantil seguro.",
    icon: Bus,
    image: "/images/placeholder.png",
  },
  {
    title: "Gestion de Recurso e Instalaciones",
    description:
      "Sistema de biblioteca digital, seguimiento de inventario y herramientas de programación inteligente para una utilización óptima de recursos.",
    icon: BookOpen,
    image: "/images/placeholder.png",
  },
];

export default function GridFeatures() {
  return (
    <section className="py-5 md:py-14">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          title="Características"
          heading="Plataforma todo-en-uno de gestión escolar"
          description="Optimiza toda la operación de tu escuela con nuestra completa suite de módulos integrados diseñados específicamente para instituciones educativas modernas"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>{features[0].title}</CardTitle>
              <p className="text-muted-foreground">{features[0].description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src={features[0].image}
                width={600}
                height={400}
                alt={features[0].title}
                className="rounded w-full"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{features[1].title}</CardTitle>
              <p className="text-muted-foreground">{features[1].description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src={features[1].image}
                width={600}
                height={400}
                alt={features[1].title}
                className="rounded w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
