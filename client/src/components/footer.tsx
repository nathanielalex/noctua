import { BirdIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <BirdIcon className="h-5 w-5 text-[#A8D0E6]" />
          <span className="text-lg font-semibold text-[#333333]">Noctua</span>
        </div>
        <p className="text-center text-sm text-[#333333] md:text-left">
          © {new Date().getFullYear()} Noctua. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="#" className="text-sm text-[#333333] hover:text-[#00B8D9]">
            Privacy
          </Link>
          <Link to="#" className="text-sm text-[#333333] hover:text-[#00B8D9]">
            Terms
          </Link>
          <Link to="#" className="text-sm text-[#333333] hover:text-[#00B8D9]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
