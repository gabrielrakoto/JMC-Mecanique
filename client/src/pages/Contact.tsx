import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate network request for static site
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé avec succès!",
      description: "Nous vous répondrons dans les plus brefs délais.",
      variant: "default",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <PageTransition className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              PRENDRE <span className="text-primary">RENDEZ-VOUS</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Prêt à redonner vie à votre véhicule ? Contactez-nous dès aujourd'hui.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Contact Info & Map */}
          <FadeIn delay={0.2} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card border-white/5 rounded-sm">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">Téléphone</h3>
                  <p className="text-muted-foreground">+1 418 688-4437</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-white/5 rounded-sm">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">Courriel</h3>
                  <p className="text-muted-foreground break-words">mecaniquejmc@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-white/5 rounded-sm">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-muted-foreground">176 Ave Saint-Sacrement<br/>Québec City, QC G1N 3X6</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-white/5 rounded-sm">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">Heures</h3>
                  <p className="text-muted-foreground">Lun - Ven : 8h30 - 17h00<br/>Sam - Dim : Fermé</p>
                </CardContent>
              </Card>
            </div>

            {/* Map iframe */}
            <div className="w-full h-64 sm:h-80 bg-muted rounded-sm overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.8157796590253!2d-71.2587784!3d46.7879441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8969188eec61d%3A0x6b876a47a111a91e!2s176%20Avenue%20Saint-Sacrement%2C%20Qu%C3%A9bec%2C%20QC%20G1N%203X6!5e0!3m2!1sen!2sca!4v1715000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps JMC Mécanique"
              ></iframe>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <Card className="bg-card border-white/5 rounded-sm h-full">
              <CardContent className="p-8 sm:p-10">
                <h2 className="text-2xl font-display font-bold mb-6">Envoyez-nous un message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Tremblay" className="bg-background border-white/10 rounded-sm focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Courriel</FormLabel>
                          <FormControl>
                            <Input placeholder="jean@exemple.com" type="email" className="bg-background border-white/10 rounded-sm focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Votre message (Raison du rendez-vous)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Bonjour, j'aimerais prendre rendez-vous pour un alignement..." 
                              className="bg-background border-white/10 rounded-sm focus-visible:ring-primary min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold tracking-wide uppercase rounded-sm border-glow transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer la demande
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </FadeIn>

        </div>
      </div>
    </PageTransition>
  );
}
