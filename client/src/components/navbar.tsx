import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import MobileNav from "./mobilenav";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Noctua"
            className="w-10 h-auto object-contain"
          />
          <span className="text-xl font-bold text-[#333333]">Noctua</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-[#333333] hover:text-[#00B8D9]"
          >
            How It Works
          </Link>
          <Link
            to="/safety"
            className="text-sm font-medium text-[#333333] hover:text-[#00B8D9]"
          >
            Safety
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-[#333333] hover:text-[#00B8D9]"
          >
            About
          </Link>
        </nav>
        <MobileNav />
        <div className="hidden md:block">
          <Button
            className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white cursor-pointer"
            onClick={() => navigate("/monitor")}
          >
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
