import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Youtube, AlertCircle } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
}

export default function YouTubePage() {
  const { data: videos, isLoading, error } = useQuery<YouTubeVideo[]>({
    queryKey: ["/api/youtube/videos"],
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body flex items-center gap-2 w-fit mx-auto">
                <Youtube className="w-4 h-4" />
                Video Tutorials
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl text-foreground">
              Latest YouTube Videos
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Watch my latest Python tutorials and programming guides. Subscribe to the channel for weekly updates!
            </p>
            <div className="pt-4">
              <a
                href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-subscribe-channel"
              >
                <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg font-body">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe to Channel
                </Button>
              </a>
            </div>
          </div>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-12 h-12 text-primary animate-spin" data-testid="loader-videos" />
              <p className="text-muted-foreground font-body text-lg">Loading latest videos...</p>
            </div>
          )}

          {error && (
            <Card className="p-12 text-center bg-card border-2 hover-elevate active-elevate-2 transition-all" data-testid="error-videos">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-semibold text-xl text-foreground">
                    Videos coming soon — stay tuned!
                  </h3>
                  <p className="text-muted-foreground font-body">
                    We're updating our video library. Check back soon or visit our YouTube channel directly.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-visit-channel"
                  >
                    <Button className="font-body">
                      Visit YouTube Channel
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          )}

          {videos && videos.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group"
                  data-testid={`card-video-${index}`}
                >
                  <div className="relative aspect-video bg-muted">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      data-testid={`iframe-video-${index}`}
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-sans font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors" data-testid={`text-video-title-${index}`}>
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-body pt-2">
                      <Youtube className="w-4 h-4" />
                      <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 text-center hover-elevate active-elevate-2 transition-all">
            <div className="space-y-6">
              <Youtube className="w-16 h-16 text-red-600 mx-auto" />
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground">
                Never Miss a Video
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
                Subscribe to the YouTube channel and turn on notifications to get alerts when new Python tutorials are uploaded.
              </p>
              <div className="pt-4">
                <a
                  href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-subscribe-bottom"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg font-body">
                    <Youtube className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
