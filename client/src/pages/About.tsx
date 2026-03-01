import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <PageTransition className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              À PROPOS DE <span className="text-primary">NOUS</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              La passion de l'automobile alliée à une rigueur professionnelle inégalée.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-primary/20 transform translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              {/* Unsplash garage interior */}
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop" 
                alt="JMC Garage Interior" 
                className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-display font-bold mb-6">
              L'EXCELLENCE DANS CHAQUE DÉTAIL
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Chez <strong className="text-foreground">JMC Mécanique</strong>, nous croyons qu'une réparation automobile ne doit jamais être effectuée à moitié. Notre philosophie est simple : traiter chaque véhicule comme s'il était le nôtre.
              </p>
              <p>
                Notre mécanicien expert travaille avec <strong className="text-foreground">précision, propreté et souci du détail</strong>. Rien n'est laissé au hasard. Nous comprenons l'importance de votre véhicule dans votre vie quotidienne, c'est pourquoi nous garantissons un diagnostic honnête et une exécution impeccable.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  "Diagnostic précis et transparent",
                  "Atelier maintenu dans une propreté exemplaire",
                  "Approche méthodique et rigoureuse",
                  "Utilisation d'outils de pointe",
                  "Respect des normes du manufacturier"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
