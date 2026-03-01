import { useState } from "react";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  // Unsplash automotive mechanics placeholders
  { id: 1, url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop", alt: "Mécanicien au travail" },
  { id: 2, url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop", alt: "Installation de pneus" },
  { id: 3, url: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1000&auto=format&fit=crop", alt: "Travail sous le véhicule" },
  { id: 4, url: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1000&auto=format&fit=crop", alt: "Outils de précision" },
  { id: 5, url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop", alt: "Inspection moteur" },
  { id: 6, url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop", alt: "Atelier propre et organisé" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageTransition className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              NOTRE <span className="text-primary">GALERIE</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Un aperçu de notre environnement de travail soigné et de notre équipement professionnel.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <FadeIn key={img.id} delay={index * 0.1}>
              <div 
                className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer border border-white/5 bg-card"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-primary rounded-full p-2 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Vue agrandie" 
              className="max-w-full max-h-[90vh] object-contain rounded-sm border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
