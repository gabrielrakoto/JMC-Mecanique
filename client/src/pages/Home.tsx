import { Link } from "wouter";
import { ChevronRight, Settings, Gavel, ShieldCheck } from "lucide-react";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <PageTransition className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Absolute Background */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash realistic mechanic working on a car */}
          <img
            src="/images/gallery/gallery-1.jpg"
            alt="Mécanicien travaillant sur un moteur"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient wash over hero image */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/10 text-primary text-sm font-display font-semibold uppercase mb-6 tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Expertise & Précision
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6">
                RÉPARATION DE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 text-glow">
                  HAUTE QUALITÉ
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10 max-w-2xl border-l-4 border-primary pl-6">
                Notre mécanicien travaille avec précision, propreté et souci du détail — rien n'est laissé au hasard. Chez JMC Garage, on ne fait pas que réparer des voitures... On les remet à neuf.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide uppercase px-8 h-14 rounded-sm border-glow">
                  <Link href="/contact">
                    Prendre Rendez-vous <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-sm font-bold tracking-wide uppercase border-white/20 hover:bg-white/5">
                  <Link href="/services">
                    Nos Services
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mini features strip */}
      <section className="bg-card border-y border-white/5 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {[
              { icon: Gavel, title: "Mécanique Générale", desc: "Diagnostic et réparation complète" },
              { icon: ShieldCheck, title: "Satisfaction Garantie", desc: "Un travail soigné et transparent" },
              { icon: Settings, title: "Pièces de Qualité", desc: "Durabilité pour votre véhicule" }
            ].map((feature, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1} className="flex items-center gap-6 md:px-8 first:pl-0 last:pr-0 py-4 md:py-0">
                <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
