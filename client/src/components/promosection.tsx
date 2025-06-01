import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function PromoSection() {
  const navigate = useNavigate();
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
            Ready to Drive Safer?
          </h2>
          <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed">
            Use Noctua to stay safe on the road.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button
            className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white h-14 px-8"
            onClick={() => navigate("/monitor")}
          >
            Try Noctua
          </Button>
          <Button
            variant="outline"
            className="border-[#A8D0E6] text-[#333333] h-14 px-8"
            onClick={() => navigate("/how-it-works")}
          >
            Learn How It Works
          </Button>
        </div>
      </div>
    </div>
  );
}
