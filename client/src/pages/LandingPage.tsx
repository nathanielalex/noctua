import { Bell, Car, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StatItem from "@/components/statitem";
import StepCard from "@/components/stepcard";
import FeatureCard from "@/components/featurecard";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/monitor");
  }
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#333333]">
                    Stay Awake. Stay Safe.
                  </h1>
                  <p className="max-w-[600px] text-[#333333] md:text-xl">
                    Noctua detects signs of drowsiness while driving and alerts
                    you before it's too late.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white"
                    onClick={handleClick}
                  >
                    Try Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#A8D0E6] text-[#333333]"
                    onClick={() => navigate("/how-it-works")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-[#333333] rounded-[36px] p-4 shadow-lg">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#333333] rounded-b-xl"></div>
                  <div className="w-full h-full bg-[#A8D0E6] rounded-[28px] overflow-hidden flex items-center justify-center">
                    <img
                      src="main_interface.jpg"
                      alt="Noctua App Interface"
                      width={300}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Advanced technology to keep you safe on the road
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<Bell className="h-10 w-10 text-[#FFB400]" />}
                title="Smart Alerts"
                description="Receive timely audio alerts when signs of drowsiness are detected."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-[#00B8D9]" />}
                title="Privacy First"
                description="No video data is ever uploaded or stored."
              />
              <FeatureCard
                icon={<Car className="h-10 w-10 text-[#FF6F00]" />}
                title="Simple"
                description="Just visit our website without having to login."
              />
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple setup, powerful protection
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <StepCard
                number="1"
                title="Mount Your Phone"
                description="Secure your phone on your dashboard with a clear view of your face."
              />
              <StepCard
                number="2"
                title="Start the App"
                description="Open Noctua before you begin driving and tap 'Start Monitoring'."
              />
              <StepCard
                number="3"
                title="Drive Safely"
                description="The app runs in the background, monitoring for signs of drowsiness."
              />
            </div>
          </div>
        </section>

        <section id="safety" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFB400] rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#A8D0E6] rounded-full opacity-30"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-2xl font-bold text-[#333333]">
                          Drowsy Driving Facts
                        </h3>
                        <span className="text-[#D32F2F] font-bold">ALERT</span>
                      </div>
                      <ul className="space-y-2">
                        <StatItem
                          value="90,000+"
                          description="Crashes caused by drowsy driving each year in the US"
                        />
                        <StatItem
                          value="50,000+"
                          description="People injured in drowsy driving crashes annually"
                        />
                        <StatItem
                          value="693"
                          description="Deaths in the US caused by drowsy driving in 2022"
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                    Safety is Our Priority
                  </h2>
                  <p className="text-[#333333] md:text-xl">
                    Drowsy driving can be as dangerous as drunk driving. Noctua
                    uses AI to detect the early signs of drowsiness before an
                    accident can happen.
                  </p>
                </div>
                <div>
                  <Button
                    className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white"
                    onClick={() => navigate("/how-it-works")}
                  >
                    Learn About Our Technology
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
