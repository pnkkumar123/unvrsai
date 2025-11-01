import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Activity, Download, Share2, ArrowLeft, CheckCircle2, AlertCircle, Info } from "lucide-react";

const Results = () => {
  const metrics = [
    { label: "Overall Health Score", value: "87", unit: "/100", status: "good", trend: "+3" },
    { label: "Blood Oxygen", value: "98", unit: "%", status: "good", trend: "+1" },
    { label: "Heart Rate", value: "72", unit: "bpm", status: "normal", trend: "0" },
    { label: "Stress Level", value: "Low", unit: "", status: "good", trend: "-5" },
  ];

  const insights = [
    {
      type: "positive",
      title: "Excellent cardiovascular health",
      description: "Your heart rate and blood oxygen levels are within optimal ranges.",
    },
    {
      type: "info",
      title: "Hydration recommendation",
      description: "Consider increasing water intake by 10-15% for optimal cellular function.",
    },
    {
      type: "normal",
      title: "Regular monitoring suggested",
      description: "Continue monthly scans to track your health trends over time.",
    },
  ];

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
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  UNVRS AI
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="default" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-2">
              <CheckCircle2 className="h-8 w-8 text-accent" />
              <h1 className="text-4xl font-bold">Scan Complete</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Scan performed on January 15, 2025 at 2:30 PM
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  {metric.trend !== "0" && (
                    <span
                      className={`text-xs font-medium ${
                        parseFloat(metric.trend) > 0 ? "text-accent" : "text-destructive"
                      }`}
                    >
                      {metric.trend > "0" ? "+" : ""}
                      {metric.trend}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold">{metric.value}</span>
                  <span className="text-lg text-muted-foreground">{metric.unit}</span>
                </div>
                <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{
                      width: metric.unit === "/100" ? `${metric.value}%` : "85%",
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Health Insights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">AI Health Insights</h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <Card
                  key={index}
                  className="p-6 border-border bg-card animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    {insight.type === "positive" && (
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    )}
                    {insight.type === "info" && (
                      <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    )}
                    {insight.type === "normal" && (
                      <AlertCircle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-semibold mb-1">{insight.title}</h3>
                      <p className="text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Analysis */}
          <Card className="p-8 border-border bg-card mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold mb-6">Detailed Analysis</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Cardiovascular System</h3>
                <p className="text-muted-foreground mb-3">
                  Your cardiovascular metrics indicate excellent heart health. Blood oxygen saturation is
                  optimal at 98%, and your resting heart rate of 72 bpm falls within the ideal range for your
                  age group.
                </p>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Metabolic Function</h3>
                <p className="text-muted-foreground mb-3">
                  Metabolic indicators suggest normal cellular function. Minor improvements in hydration could
                  enhance metabolic efficiency.
                </p>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Stress Response</h3>
                <p className="text-muted-foreground mb-3">
                  Stress biomarkers are within healthy ranges. Continue your current stress management
                  practices for optimal wellbeing.
                </p>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "88%" }} />
                </div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <Link to="/scan">
              <Button variant="hero" size="lg">
                Schedule Next Scan
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
