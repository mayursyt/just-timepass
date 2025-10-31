import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Heart, Lightbulb, TrendingUp, User } from "lucide-react";

const journey = [
  {
    year: "2015",
    title: "Teaching Begins",
    description: "Started teaching Python to beginners with a passion for making programming accessible.",
  },
  {
    year: "2018",
    title: "YouTube Launch",
    description: "Launched YouTube channel to reach and help students worldwide with free content.",
  },
  {
    year: "2020",
    title: "10K Subscribers",
    description: "Reached 10,000 subscribers milestone, expanding the learning community.",
  },
  {
    year: "2025",
    title: "Present Day",
    description: "Continuing to empower thousands of students with comprehensive Python education.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision is made with student success in mind.",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Focus on real-world applications and hands-on projects.",
  },
  {
    icon: Target,
    title: "Clear Goals",
    description: "Structured learning paths with measurable outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Always updating content with latest industry trends.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body">
                About Me
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl text-foreground">
              Meet Raj Sir
            </h1>
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarFallback className="bg-primary text-primary-foreground text-5xl">
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>
          </div>

          <Card className="p-8 sm:p-12 space-y-6 hover-elevate active-elevate-2 transition-all">
            <h2 className="font-sans font-bold text-3xl text-foreground mb-6">
              Python Educator & Mentor
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Hello! I'm Raj Sir, a passionate Python educator dedicated to making programming accessible and enjoyable for everyone. With over a decade of experience in software development and teaching, I've helped thousands of students transform their careers through Python programming.
              </p>
              <p>
                My teaching philosophy is simple: learn by doing. I believe that the best way to master programming is through practical projects, real-world applications, and consistent practice. Every lesson I create is designed to be engaging, easy to understand, and immediately applicable.
              </p>
              <p>
                Through my YouTube channel and courses, I've built a community of learners who support each other, share knowledge, and grow together. Whether you're a complete beginner or looking to advance your skills, I'm here to guide you on your Python journey.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              A decade of teaching, learning, and growing with an amazing community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((item, index) => (
              <Card
                key={item.year}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-journey-${index}`}
              >
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary font-sans">{item.year}</div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground">
              Teaching Values
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              The principles that guide my approach to education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-value-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover-elevate active-elevate-2 transition-all">
            <div className="text-center space-y-6">
              <Target className="w-16 h-16 text-primary mx-auto" />
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground">
                My Mission
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                To empower individuals worldwide with Python programming skills, enabling them to build amazing projects, advance their careers, and solve real-world problems through code.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
