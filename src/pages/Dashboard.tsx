import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Activity, Camera, FileText, Settings, LogOut, History } from "lucide-react";
import dashboardPreview from "../assets/dashboard-preview.jpg";

const Dashboard = () => {
  const recentScans = [
    { id: 1, date: "2025-01-15", type: "Blood Analysis", status: "Completed" },
    { id: 2, date: "2025-01-10", type: "General Scan", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                UNVRS AI
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-lg text-muted-foreground">Ready for your next health scan?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link to="/scan" className="group">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-primary/5 to-primary/10 animate-fade-in-up">
              <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">New Scan</h3>
              <p className="text-muted-foreground">Start a new AI diagnostic scan</p>
            </Card>
          </Link>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <History className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">History</h3>
            <p className="text-muted-foreground">View your past scan results</p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <FileText className="h-7 w-7 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Reports</h3>
            <p className="text-muted-foreground">Download detailed health reports</p>
          </Card>
        </div>

        {/* Recent Scans */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Scans</h2>
          <div className="space-y-4">
            {recentScans.map((scan) => (
              <Link key={scan.id} to="/results" className="block">
                <Card className="p-6 hover:shadow-md transition-all duration-300 border-border bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{scan.type}</h3>
                        <p className="text-sm text-muted-foreground">{scan.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                        {scan.status}
                      </span>
                      <Button variant="ghost" size="sm">View Results</Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Health Insights Preview */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Health Overview</h2>
          <Card className="overflow-hidden border-border">
            <img
              src={dashboardPreview}
              alt="Health Dashboard"
              className="w-full h-auto"
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
