import ChatInterface from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Sparkles, Map, Hotel, Utensils, Sun } from "lucide-react";
import heroImage from "@/assets/hero-india.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Discover Incredible India
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Your AI-powered virtual travel assistant for exploring India's wonders
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Sparkles className="w-5 h-5" />
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Can I Help You With?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Map className="w-8 h-8" />}
              title="Trip Planning"
              description="Create personalized itineraries based on your preferences"
            />
            <FeatureCard
              icon={<Hotel className="w-8 h-8" />}
              title="Accommodations"
              description="Find the perfect hotels for your budget and style"
            />
            <FeatureCard
              icon={<Utensils className="w-8 h-8" />}
              title="Food Recommendations"
              description="Discover authentic local cuisine and top restaurants"
            />
            <FeatureCard
              icon={<Sun className="w-8 h-8" />}
              title="Best Time to Visit"
              description="Get climate info and seasonal recommendations"
            />
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Chat With Your Travel Assistant
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ask me anything about traveling in India - I'm here to help!
          </p>
          <ChatInterface />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 AI Tourism ChatBOT for India. Powered by AI.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-lg transition-shadow">
    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;