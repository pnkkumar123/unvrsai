import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Activity, Camera, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import scanVisualization from "../assets/scan-visualization.jpg";

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleStartScan = () => {
    setIsScanning(true);
    setProgress(0);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/results");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  UNVRS AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-4">AI Diagnostic Scan</h1>
            <p className="text-lg text-muted-foreground">
              Position yourself in front of the camera and follow the on-screen instructions
            </p>
          </div>

          {/* Camera/Scan Interface */}
          <Card className="p-8 mb-8 border-border bg-card animate-fade-in">
            <div className="aspect-video bg-secondary/30 rounded-lg mb-6 relative overflow-hidden flex items-center justify-center">
              {!isScanning ? (
                <div className="text-center">
                  <Camera className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Camera preview will appear here</p>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={scanVisualization}
                    alt="Scan in progress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-16 w-16 text-primary animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {isScanning && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Analyzing...</span>
                  <span className="font-semibold">{progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing biological data with AI...</span>
                </div>
              </div>
            )}
          </Card>

          {/* Instructions */}
          {!isScanning && (
            <Card className="p-8 mb-8 border-border bg-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-4">Before you begin:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Ensure you're in a well-lit environment
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Position the camera at eye level
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Stay still during the scanning process
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    The scan will take approximately 30-40 seconds
                  </span>
                </li>
              </ul>
            </Card>
          )}

          {/* Action Button */}
          {!isScanning && (
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button onClick={handleStartScan} variant="hero" size="lg" className="group">
                <Camera className="mr-2 h-5 w-5" />
                Start Scan
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Scan;
