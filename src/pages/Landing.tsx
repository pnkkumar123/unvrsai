import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Navbar } from "../components/Navbar";
import { Brain, Zap, Shield, Activity, ArrowRight, Camera, BarChart3 } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";
import scanVisualization from "../assets/scan-visualization.jpg";
import dashboardPreview from "../assets/dashboard-preview.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Visualize Your Biology
              <span className="block mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                In Real Time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The world's first AI-powered diagnostic system that lets you understand your biological
              data instantly, with precision and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="group">
                  Start Your Scan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="#how-it-works">
                <Button variant="glass" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto animate-fade-in">
            <img
              src={scanVisualization}
              alt="AI Diagnostic Visualization"
              className="rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our cutting-edge technology brings professional-grade diagnostics to your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze your biological data with unprecedented accuracy
                and speed.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border bg-card" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Results</h3>
              <p className="text-muted-foreground">
                Get instant insights and visualization of your health data, no waiting for lab results.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border bg-card" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your health data is encrypted and protected with enterprise-grade security protocols.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, fast, and accurate in three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Scan</h3>
              <p className="text-muted-foreground">
                Use your device camera to capture the required biological sample with our guided interface.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Analyze</h3>
              <p className="text-muted-foreground">
                Our AI processes your data instantly using advanced algorithms and medical knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Understand</h3>
              <p className="text-muted-foreground">
                View clear, actionable insights with beautiful visualizations of your health data.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <img
              src={dashboardPreview}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-xl border border-border mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of Health Diagnostics</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            UNVRS AI is pioneering the next generation of health technology. Our mission is to democratize
            access to advanced diagnostics, making professional-grade health insights available to everyone,
            anywhere, at any time.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded by Daniel Palsager and backed by cutting-edge AI research, we're building the platform
            that will transform how people understand and manage their health.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the future of health diagnostics today
          </p>
          <Link to="/auth">
            <Button variant="hero" size="lg" className="group">
              Create Your Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-bold">UNVRS AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 UNVRS AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
