import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Activity } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth" || location.pathname === "/login";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Activity className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              UNVRS AI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              to="/#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthPage && (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="hero" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
