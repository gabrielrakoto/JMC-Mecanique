import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Site 100% statique : aucune route API backend n'est enregistrée
  return httpServer;
}
