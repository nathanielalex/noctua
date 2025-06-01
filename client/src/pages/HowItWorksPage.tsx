import { Camera, Eye, Shield, Smartphone, Volume2, Zap } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import PromoSection from "@/components/promosection";

const images = [
  "https://editorial.pxcrush.net/carsales/general/editorial/suction_phone_mount.jpg?width=1024&height=682",
  "landing_interface.jpg",
  "main_interface.jpg",
  "https://images.unsplash.com/photo-1562877961-efcec8439f9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add as many steps as you need
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col bg-white">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
            <div className="w-full px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#333333]">
                    How Noctua Works
                  </h1>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Advanced AI technology that monitors your alertness in
                    real-time to keep you safe on the road
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="w-full px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                      AI-Powered Detection
                    </h2>
                    <p className="text-[#333333] md:text-lg">
                      Noctua uses computer vision to detect whether you are
                      drowsy or not:
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <TechFeature
                      icon={<Camera className="h-6 w-6 text-[#FF6F00]" />}
                      title="Facial Recognition"
                      description="Tracks your head"
                    />
                    <TechFeature
                      icon={<Eye className="h-6 w-6 text-[#FFB400]" />}
                      title="Eye Analysis"
                      description="Checks whether they are closed or not"
                    />
                    <TechFeature
                      icon={<Zap className="h-6 w-6 text-[#00B8D9]" />}
                      title="Real-time Processing"
                      description="Instant analysis with alerts triggered"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#A8D0E6] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFB400] rounded-full opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg border border-[#F0F0F0]">
                      <img
                        src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="AI Detection Technology"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
            <div className="w-full px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                    Step-by-Step Process
                  </h2>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed">
                    Follow these simple steps to start protecting yourself on
                    the road
                  </p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <StepCard
                      key={index}
                      step={step}
                      isActive={activeStep === step.number}
                      onClick={() => setActiveStep(step.number)}
                    />
                  ))}
                </div>
                <div className="flex justify-center lg:sticky lg:top-24">
                  <div className="relative w-[280px] h-[560px] bg-[#333333] rounded-[36px] p-4 shadow-lg overflow-hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#333333] rounded-b-xl z-10"></div>
                    <img
                      src={images[activeStep - 1]}
                      alt={`Step ${activeStep} Interface`}
                      className="w-full h-full object-cover rounded-[28px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="w-full px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#D32F2F] to-[#FF6F00] rounded-full flex items-center justify-center shadow-lg">
                      <Volume2 className="h-24 w-24 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFB400] rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#00B8D9] rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                      Alert System
                    </h2>
                    <p className="text-[#333333] md:text-lg">
                      Noctua alerts you to wake you up when you are sleepy.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <AlertLevel
                      level="1"
                      title="Drowsiness Detected"
                      description="Our AI detects that you are drowsy."
                      color="bg-[#FFB400]"
                    />
                    <AlertLevel
                      level="2"
                      title="Signs of Asleep"
                      description="Drowsiness is detected consecutively."
                      color="bg-[#FF6F00]"
                    />
                    <AlertLevel
                      level="3"
                      title="Emergency Wake"
                      description="An alarm will be played for 10 seconds."
                      color="bg-[#D32F2F]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#A8D0E6]/20">
            <PromoSection />
          </section>
        </main>
      </div>
    </Layout>
  );
}

const steps = [
  {
    number: 1,
    title: "Setup Your Phone",
    description:
      "Mount your phone on the dashboard with the front camera facing you. Ensure good lighting and a clear view of your face.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    number: 2,
    title: "Open Noctua",
    description:
      "Open our website and go to the monitor page. Make sure to enable camera permissions before.",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    number: 3,
    title: "Start Monitoring",
    description:
      "Tap 'Start Monitoring' before you begin driving. It runs in the background while you drive.",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    number: 4,
    title: "Stay Alert",
    description:
      "Drive normally while Noctua monitors your alertness. You'll receive alerts if drowsiness is detected.",
    icon: <Shield className="h-6 w-6" />,
  },
];

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepCardProps {
  step: StepData;
  isActive: boolean;
  onClick: () => void;
}

interface AlertLevelProps {
  level: string | number;
  title: string;
  description: string;
  color: string; // Tailwind color classes
}

function TechFeature({ icon, title, description }: TechFeatureProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-[#F0F0F0] rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-[#333333]">{title}</h3>
        <p className="text-sm text-[#333333]/80">{description}</p>
      </div>
    </div>
  );
}

function StepCard({ step, isActive, onClick }: StepCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
        isActive
          ? "border-[#00B8D9] bg-[#00B8D9]/5"
          : "border-[#F0F0F0] bg-white hover:border-[#A8D0E6]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isActive ? "bg-[#00B8D9] text-white" : "bg-[#F0F0F0] text-[#333333]"
          }`}
        >
          {step.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#333333] mb-2">
            {step.title}
          </h3>
          <p className="text-[#333333]/80">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

function AlertLevel({ level, title, description, color }: AlertLevelProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
      >
        {level}
      </div>
      <div>
        <h3 className="font-semibold text-[#333333]">{title}</h3>
        <p className="text-sm text-[#333333]/80">{description}</p>
      </div>
    </div>
  );
}
