import { Link } from "wouter";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-2xl tracking-wider text-foreground">
                JMC <span className="text-primary">MÉCANIQUE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expertise en mécanique automobile, service professionnel et attention au détail. Chez JMC Garage, on ne fait pas que réparer des voitures... On les remet à neuf.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-6">Coordonnées</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">176 Ave Saint-Sacrement,<br />Québec City, QC G1N 3X6</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+1 418 688-4437</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">mecaniquejmc@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Heures d'ouverture</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Lundi - Vendredi</p>
                  <p>8h30 - 17h00</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Samedi - Dimanche</p>
                  <p>Fermé</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Nos Services</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary text-sm transition-colors">Galerie</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} JMC Mécanique. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Propulsé par la passion automobile.
          </p>
        </div>
      </div>
    </footer>
  );
}
