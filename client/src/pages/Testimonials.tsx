import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Developer",
    content: "Raj Sir's teaching style is exceptional! The way he explains complex concepts with simple examples made Python so easy to understand. I went from zero to landing my first job as a developer in just 6 months.",
    initials: "PS",
    rating: 5,
  },
  {
    id: "2",
    name: "Amit Patel",
    role: "Data Analyst",
    content: "The Python courses are incredibly well-structured. Each lesson builds upon the previous one, and the projects are practical and relevant. I highly recommend Raj Sir's courses to anyone wanting to learn Python.",
    initials: "AP",
    rating: 5,
  },
  {
    id: "3",
    name: "Sneha Reddy",
    role: "Student",
    content: "As a complete beginner, I was worried about learning programming. But Raj Sir's patient teaching and clear explanations made everything click. The YouTube videos are gold!",
    initials: "SR",
    rating: 5,
  },
  {
    id: "4",
    name: "Rahul Kumar",
    role: "Machine Learning Engineer",
    content: "Best Python instructor I've found online. The depth of knowledge combined with practical applications is exactly what I needed to transition into ML. Thank you, Raj Sir!",
    initials: "RK",
    rating: 5,
  },
  {
    id: "5",
    name: "Ananya Singh",
    role: "Web Developer",
    content: "The Django course helped me build my first full-stack application. Raj Sir's approach of teaching through real projects made the learning experience so much more engaging and effective.",
    initials: "AS",
    rating: 5,
  },
  {
    id: "6",
    name: "Vikram Desai",
    role: "Automation Engineer",
    content: "I automated half of my daily tasks using Python scripts learned from Raj Sir's courses. The ROI on this learning has been incredible. Clear, concise, and practical tutorials!",
    initials: "VD",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const currentTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body">
                Success Stories
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl text-foreground">
              Student Testimonials
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Hear from students who transformed their careers and achieved their goals through our Python courses.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {currentTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className="p-8 hover-elevate active-elevate-2 transition-all duration-300 relative"
                  data-testid={`card-testimonial-${currentIndex * 2 + index}`}
                >
                  <div className="absolute top-6 right-6 text-primary/10">
                    <Quote className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-4 relative">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-sans font-semibold text-lg text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground font-body leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                disabled={currentIndex === 0}
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / 2))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-primary w-8" : "bg-muted"
                    }`}
                    data-testid={`button-dot-${i}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                disabled={currentIndex === Math.ceil(testimonials.length / 2) - 1}
                data-testid="button-next-testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-4xl text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Our students' success speaks for itself
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-stat-0">
              <div className="text-5xl font-bold text-primary font-sans mb-2">10K+</div>
              <div className="text-muted-foreground font-body">Happy Students</div>
            </Card>
            <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-stat-1">
              <div className="text-5xl font-bold text-primary font-sans mb-2">500+</div>
              <div className="text-muted-foreground font-body">Video Tutorials</div>
            </Card>
            <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-stat-2">
              <div className="text-5xl font-bold text-primary font-sans mb-2">50+</div>
              <div className="text-muted-foreground font-body">Courses Available</div>
            </Card>
            <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-stat-3">
              <div className="text-5xl font-bold text-primary font-sans mb-2">98%</div>
              <div className="text-muted-foreground font-body">Satisfaction Rate</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 text-center hover-elevate active-elevate-2 transition-all">
            <div className="space-y-6">
              <Star className="w-16 h-16 text-yellow-400 mx-auto fill-yellow-400" />
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
                Become part of a thriving community of Python learners and start your success story today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a href="/courses" data-testid="link-view-courses">
                  <Button size="lg" className="font-body text-base px-8" data-testid="button-view-courses">
                    View Courses
                  </Button>
                </a>
                <a href="/contact" data-testid="link-get-in-touch">
                  <Button size="lg" variant="outline" className="font-body text-base px-8" data-testid="button-get-in-touch">
                    Get in Touch
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
