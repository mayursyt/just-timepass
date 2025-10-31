import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = "UCDqBwGKpLwKBKKCHN0d6bFQ";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  app.get("/api/youtube/videos", async (req, res) => {
    try {
      if (!YOUTUBE_API_KEY) {
        throw new Error("YouTube API key not configured");
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=6&type=video`
      );

      if (!response.ok) {
        throw new Error("YouTube API request failed");
      }

      const data = await response.json();
      
      const videos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
      }));

      res.json(videos);
    } catch (error) {
      console.error("YouTube API error:", error);
      res.status(500).json({ error: "Failed to fetch YouTube videos" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
