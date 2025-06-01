import { AlertTriangle, Clock, Car, Eye, MapPin, Users } from "lucide-react";
import { ReactNode } from "react";
import Layout from "@/components/Layout";
import PromoSection from "@/components/promosection";

interface StatCardProps {
  icon: ReactNode;
  number: number | string;
  label: string;
  description: string;
  color: string;
}

interface WarningSignProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface EmergencyStepProps {
  number: number | string;
  title: string;
  description: string;
  color: string;
}

export default function SafetyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Layout>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#333333]">
                    Drowsy Driving Safety
                  </h1>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Learn about the dangers of drowsy driving and how to stay
                    safe on the road
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                    The Hidden Danger
                  </h2>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed">
                    Drowsy driving is a serious safety threat that affects
                    millions of drivers every year
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <StatCard
                  icon={<Car className="h-8 w-8 text-[#D32F2F]" />}
                  number="90,000+"
                  label="Crashes Annually"
                  description="Police-reported crashes in the US caused by drowsy driving"
                  color="bg-[#D32F2F]"
                />
                <StatCard
                  icon={<Users className="h-8 w-8 text-[#FF6F00]" />}
                  number="50,000+"
                  label="Injuries"
                  description="People injured in drowsy driving crashes annually"
                  color="bg-[#FF6F00]"
                />
                <StatCard
                  icon={<AlertTriangle className="h-8 w-8 text-[#FFB400]" />}
                  number="693"
                  label="Fatalities"
                  description="Deaths in the US caused by drowsy driving in 2022"
                  color="bg-[#FFB400]"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                      Warning Signs of Drowsiness
                    </h2>
                    <p className="text-[#333333] md:text-lg">
                      Recognize these danger signals before it's too late
                    </p>
                  </div>
                  <div className="space-y-4">
                    <WarningSign
                      icon={<Eye className="h-6 w-6 text-[#D32F2F]" />}
                      title="Heavy Eyelids"
                      description="Frequent blinking, difficulty keeping eyes open, or eyes closing for brief moments"
                    />
                    <WarningSign
                      icon={<MapPin className="h-6 w-6 text-[#FF6F00]" />}
                      title="Drifting or Swerving"
                      description="Unintentional lane changes, hitting rumble strips, or difficulty maintaining position"
                    />
                    <WarningSign
                      icon={<Clock className="h-6 w-6 text-[#FFB400]" />}
                      title="Delayed Reactions"
                      description="Slower response to traffic signals, brake lights, or road hazards"
                    />
                    <WarningSign
                      icon={
                        <AlertTriangle className="h-6 w-6 text-[#00B8D9]" />
                      }
                      title="Memory Gaps"
                      description="Not remembering the last few miles driven or missing exits and turns"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D32F2F] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFB400] rounded-full opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg border border-[#F0F0F0]">
                      <img
                        src="https://images.unsplash.com/photo-1535920864647-9370cc7e849a?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Drowsy Driver Warning Signs"
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

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#D32F2F] to-[#FF6F00] rounded-full flex items-center justify-center shadow-lg">
                      <AlertTriangle className="h-24 w-24 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFB400] rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#00B8D9] rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                      If You Feel Drowsy While Driving
                    </h2>
                    <p className="text-[#333333] md:text-lg">
                      Take immediate action to protect yourself and others on
                      the road
                    </p>
                  </div>
                  <div className="space-y-4">
                    <EmergencyStep
                      number="1"
                      title="Pull Over Safely"
                      description="Find the nearest safe location - rest area, parking lot, or wide shoulder"
                      color="bg-[#D32F2F]"
                    />
                    <EmergencyStep
                      number="2"
                      title="Take a Power Nap"
                      description="Sleep for 15-20 minutes. Set an alarm to avoid oversleeping"
                      color="bg-[#FF6F00]"
                    />
                    <EmergencyStep
                      number="3"
                      title="Assess Your Condition"
                      description="If still tired after napping, find alternative transportation or accommodation"
                      color="bg-[#FFB400]"
                    />
                    <EmergencyStep
                      number="4"
                      title="Get Help if Needed"
                      description="Call a friend, family member, or rideshare service if you can't drive safely"
                      color="bg-[#00B8D9]"
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
      </Layout>
    </div>
  );
}

function StatCard({ icon, number, label, description, color }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow">
      <div
        className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <div className="text-3xl font-bold text-[#333333] mb-1">{number}</div>
      <div className="text-lg font-semibold text-[#333333] mb-2">{label}</div>
      <div className="text-sm text-[#333333]/80">{description}</div>
    </div>
  );
}

function WarningSign({ icon, title, description }: WarningSignProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#F0F0F0]">
      <div className="p-2 bg-[#F0F0F0] rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-[#333333] mb-1">{title}</h3>
        <p className="text-sm text-[#333333]/80">{description}</p>
      </div>
    </div>
  );
}

function EmergencyStep({
  number,
  title,
  description,
  color,
}: EmergencyStepProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
      >
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-[#333333]">{title}</h3>
        <p className="text-sm text-[#333333]/80">{description}</p>
      </div>
    </div>
  );
}
