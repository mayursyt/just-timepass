import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart3, CheckCircle2, GraduationCap } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Python Fundamentals",
    description: "Master the basics of Python programming with hands-on exercises and projects. Perfect for absolute beginners starting their coding journey.",
    level: "Beginner",
    duration: "6 weeks",
    topics: ["Variables & Data Types", "Control Flow", "Functions", "Basic OOP"],
    color: "bg-green-500",
  },
  {
    id: "2",
    title: "Data Structures & Algorithms",
    description: "Deep dive into essential data structures and algorithms using Python. Build a strong foundation for technical interviews and problem-solving.",
    level: "Intermediate",
    duration: "8 weeks",
    topics: ["Lists & Arrays", "Trees & Graphs", "Sorting & Searching", "Dynamic Programming"],
    color: "bg-blue-500",
  },
  {
    id: "3",
    title: "Web Development with Django",
    description: "Build full-stack web applications using Django framework. Learn to create dynamic websites with databases, authentication, and APIs.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Django Basics", "Models & ORM", "Templates & Views", "REST APIs"],
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning with Python. Work with pandas, NumPy, matplotlib, and scikit-learn.",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["Data Analysis", "Visualization", "Machine Learning", "Real Projects"],
    color: "bg-orange-500",
  },
  {
    id: "5",
    title: "Automation & Scripting",
    description: "Automate repetitive tasks and build useful scripts. Learn to work with files, APIs, web scraping, and task automation.",
    level: "Intermediate",
    duration: "6 weeks",
    topics: ["File Operations", "Web Scraping", "API Integration", "Task Scheduling"],
    color: "bg-teal-500",
  },
  {
    id: "6",
    title: "Advanced Python Mastery",
    description: "Master advanced Python concepts including decorators, generators, context managers, and design patterns for professional development.",
    level: "Advanced",
    duration: "8 weeks",
    topics: ["Decorators", "Generators", "Design Patterns", "Performance Optimization"],
    color: "bg-red-500",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    case "Intermediate":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "Advanced":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Courses() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body">
                Learn & Grow
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl text-foreground">
              Python Courses
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Comprehensive courses designed to take you from beginner to expert. Choose your path and start learning today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 flex flex-col"
                data-testid={`card-course-${index}`}
              >
                <div className="space-y-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                      {index + 1}
                    </div>
                    <Badge className={`${getLevelColor(course.level)} border`}>
                      {course.level}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-2xl text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart3 className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground font-body">Key Topics:</div>
                    <div className="space-y-1">
                      {course.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    data-testid={`link-join-course-${index}`}
                  >
                    <Button className="w-full font-body" data-testid={`button-join-course-${index}`}>
                      Join Course
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 text-center hover-elevate active-elevate-2 transition-all">
            <div className="space-y-6">
              <GraduationCap className="w-16 h-16 text-primary mx-auto" />
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
                Join thousands of students and start your Python journey today. All courses include lifetime access, project files, and community support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-browse-courses"
                >
                  <Button size="lg" className="font-body text-base px-8" data-testid="button-browse-courses">
                    <i className="fab fa-youtube mr-2"></i>
                    Browse Free Content
                  </Button>
                </a>
                <a href="/contact" data-testid="link-contact-courses">
                  <Button size="lg" variant="outline" className="font-body text-base px-8" data-testid="button-contact-courses">
                    Contact for Details
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
