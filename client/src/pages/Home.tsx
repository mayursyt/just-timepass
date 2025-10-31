import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code2, BookOpen, Users, Award, User } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Hands-On Learning",
    description: "Practical Python projects and real-world applications to build your skills.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "From basics to advanced topics, structured learning paths for all levels.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of learners and get help from our vibrant community.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Learn from industry experience with proven teaching methodologies.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body flex items-center gap-2 w-fit">
                  <Code2 className="w-4 h-4" />
                  Python Educator & Mentor
                </span>
              </div>
              
              <h1 className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight" data-testid="text-hero-title">
                Learn Python the{" "}
                <span className="text-primary">Smart Way</span> with Raj Sir
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed" data-testid="text-hero-subtitle">
                Master Python programming through practical tutorials, expert guidance, and hands-on projects. Join thousands of students on their coding journey.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-subscribe-youtube"
                >
                  <Button size="lg" className="font-body text-base px-8 shadow-lg" data-testid="button-subscribe-youtube">
                    <i className="fab fa-youtube mr-2"></i>
                    Subscribe Now
                  </Button>
                </a>
                <a href="/courses" data-testid="link-explore-courses">
                  <Button size="lg" variant="outline" className="font-body text-base px-8" data-testid="button-explore-courses">
                    Explore Courses
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div data-testid="stat-students">
                  <div className="text-3xl font-bold text-foreground font-sans">10K+</div>
                  <div className="text-sm text-muted-foreground font-body">Students</div>
                </div>
                <div data-testid="stat-videos">
                  <div className="text-3xl font-bold text-foreground font-sans">500+</div>
                  <div className="text-sm text-muted-foreground font-body">Videos</div>
                </div>
                <div data-testid="stat-courses">
                  <div className="text-3xl font-bold text-foreground font-sans">50+</div>
                  <div className="text-sm text-muted-foreground font-body">Courses</div>
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <Card className="relative p-8 bg-card/80 backdrop-blur-sm border-2 hover-elevate active-elevate-2 transition-all" data-testid="card-hero-profile">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Avatar className="w-32 h-32 mx-auto">
                        <AvatarFallback className="bg-primary text-primary-foreground text-5xl">
                          <User className="w-16 h-16" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h3 className="font-sans font-bold text-2xl text-foreground">Raj Sir</h3>
                        <p className="text-muted-foreground font-body">Python Educator & Mentor</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground">
              Why Learn with Raj Sir?
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Experience a unique approach to Python education that combines theory with practical application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-feature-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
