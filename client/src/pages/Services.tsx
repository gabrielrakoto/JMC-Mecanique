import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { CircleDashed, LoaderPinwheel, BatteryCharging, Crosshair, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const servicesList = [
  {
    icon: CircleDashed,
    title: "Remplacement de pneus",
    description: "Installation, balancement et permutation de pneus pour toutes saisons. Sécurité et adhérence optimales.",
  },
  {
    icon: LoaderPinwheel,
    title: "Essuie-glaces",
    description: "Remplacement et vérification d'essuie-glaces pour assurer une visibilité parfaite par tous les temps.",
  },
  {
    icon: BatteryCharging,
    title: "Système de charge",
    description: "Vérification de l'état de la batterie, des bornes, de l'alternateur et de l'ensemble du système électrique.",
  },
  {
    icon: Crosshair,
    title: "Alignement",
    description: "Ajustement précis de la géométrie des roues pour prévenir l'usure prématurée de vos pneus et améliorer la conduite.",
  },
  {
    icon: Wrench,
    title: "Mécanique générale",
    description: "De la simple vidange d'huile aux réparations complexes de moteur ou de suspension. Un service complet.",
  }
];

export default function Services() {
  return (
    <PageTransition className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              NOS <span className="text-primary">SERVICES</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Une gamme complète de services d'entretien et de réparation automobile, exécutés avec une précision chirurgicale.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="bg-card border-white/5 hover:border-primary/50 transition-all duration-300 group h-full rounded-sm overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Decorative background element */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                  
                  <div className="w-16 h-16 bg-background border border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
          
          <FadeIn delay={servicesList.length * 0.1}>
            <Card className="bg-primary border-transparent h-full rounded-sm flex items-center justify-center text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                  Besoin d'une réparation spécifique ?
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Contactez-nous pour obtenir une évaluation et un devis personnalisé.
                </p>
                <Button asChild variant="secondary" className="font-bold uppercase tracking-wider rounded-sm w-full">
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

      </div>
    </PageTransition>
  );
}
