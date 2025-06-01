import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <div
              className="flex items-center gap-2"
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.png"
                alt="Noctua"
                className="w-10 h-auto object-contain"
              />
              <span className="text-xl font-bold text-[#333333]">
                DriveSafe
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="grid gap-2 px-4 py-4">
            <Link
              to="/how-it-works"
              className="flex items-center py-2 text-lg font-medium text-[#333333] hover:text-[#00B8D9]"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/safety"
              className="flex items-center py-2 text-lg font-medium text-[#333333] hover:text-[#00B8D9]"
              onClick={() => setIsOpen(false)}
            >
              Safety
            </Link>
            <Link
              to="/about"
              className="flex items-center py-2 text-lg font-medium text-[#333333] hover:text-[#00B8D9]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-4">
              <Button
                className="w-full bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white"
                onClick={() => navigate("/monitor")}
              >
                Try Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
