"use client";

import { ArrowLeft, Home, Terminal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50/50 p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="pt-16">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/90 p-6">
              <Terminal
                className="h-12 w-12 text-destructive-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">
            404 - Página No Encontrada
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            ¡Ups! La página que buscas no existe. Es posible que haya sido
            movida o eliminada.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Ir a la Página Principal
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
            </Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center pb-16 pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} SchoolPro. All rights reserved. Desarrollado por Cristian Villalobos
        </CardFooter>
      </Card>
    </main>
  );
}
