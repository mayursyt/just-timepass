import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or reach out via social media.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rajsir@example.com",
      link: "mailto:rajsir@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body">
                Get in Touch
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl text-foreground">
              Contact Me
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Have questions about courses? Want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="p-8 hover-elevate active-elevate-2 transition-all">
                <h2 className="font-sans font-bold text-2xl text-foreground mb-6">
                  Send a Message
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body">Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your full name"
                              className="font-body"
                              data-testid="input-name"
                            />
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
                          <FormLabel className="font-body">Email *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              className="font-body"
                              data-testid="input-email"
                            />
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
                          <FormLabel className="font-body">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell me about your question or inquiry..."
                              rows={6}
                              className="font-body resize-none"
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full font-body text-base"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-sans font-bold text-2xl text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-contact-info-${index}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground font-body mb-1">
                            {info.title}
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground font-medium hover:text-primary transition-colors font-body"
                              data-testid={`link-${info.title.toLowerCase()}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-foreground font-medium font-body">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover-elevate active-elevate-2 transition-all">
                <h3 className="font-sans font-bold text-xl text-foreground mb-4">
                  Connect on Social Media
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Follow me for daily Python tips, tutorials, and updates!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://youtube.com/@razsir5?si=KpoRthUeDKj6hsnl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover-elevate active-elevate-2 font-body"
                    data-testid="link-youtube-contact"
                  >
                    <i className="fab fa-youtube"></i>
                    YouTube
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover-elevate active-elevate-2 font-body"
                    data-testid="link-twitter-contact"
                  >
                    <i className="fab fa-twitter"></i>
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all hover-elevate active-elevate-2 font-body"
                    data-testid="link-linkedin-contact"
                  >
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all hover-elevate active-elevate-2 font-body"
                    data-testid="link-github-contact"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
              </Card>

              <Card className="p-8 hover-elevate active-elevate-2 transition-all">
                <h3 className="font-sans font-bold text-xl text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3 text-muted-foreground font-body">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
