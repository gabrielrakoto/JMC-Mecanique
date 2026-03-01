import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Courriel invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

export type ContactForm = z.infer<typeof contactFormSchema>;
