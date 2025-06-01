import { Heart, Shield, Target } from "lucide-react";
import Layout from "@/components/Layout";
import PromoSection from "@/components/promosection";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  color: string;
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Layout>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#333333]">
                    About Noctua
                  </h1>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're on a mission to eliminate drowsy driving accidents and
                    save lives through innovative AI technology
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                      Our Story
                    </h2>
                    <p className="text-[#333333] md:text-lg">
                      Noctua started when one of our members has his FYP filled
                      with car crashes. Since he often drives to campus, it made
                      him feel worried also.
                    </p>
                    <p className="text-[#333333] md:text-lg">
                      After seeing the recent developments of YOLO models, our
                      team then believes this can help reduce car accidents in
                      the future. Today, we're proud to offer Noctua as a
                      solution.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#A8D0E6] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFB400] rounded-full opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg border border-[#F0F0F0]">
                      <img
                        src="https://images.unsplash.com/photo-1611448746128-7c39e03b71e4?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Company Story"
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
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                    Our Mission & Values
                  </h2>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed">
                    Guided by our core principles to create safer roads for
                    everyone
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <ValueCard
                  icon={<Shield className="h-10 w-10 text-[#00B8D9]" />}
                  title="Safety First"
                  description="Every decision we make prioritizes the safety and well-being of drivers and their passengers."
                />
                <ValueCard
                  icon={<Heart className="h-10 w-10 text-[#D32F2F]" />}
                  title="Privacy Matters"
                  description="We believe in protecting user privacy with zero data collection."
                />
                <ValueCard
                  icon={<Target className="h-10 w-10 text-[#FFB400]" />}
                  title="Innovation"
                  description="We continuously want to improve our AI technology to increase detection accuracy."
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                    Meet Our Team
                  </h2>
                  <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed">
                    The passionate individuals behind Noctua
                  </p>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <TeamMember
                  name="Gavriella Tjandra"
                  role="Binus University"
                  image="https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  color="bg-[#A8D0E6]"
                />
                <TeamMember
                  name="Juan Ariviano Chandra"
                  role="Binus University"
                  image="https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  color="bg-[#00B8D9]"
                />
                <TeamMember
                  name="Nathaniel Alexander"
                  role="Binus University"
                  image="https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  color="bg-[#FFB400]"
                />
                <TeamMember
                  name="Sylvana Marine Purnomo"
                  role="Binus University"
                  image="https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  color="bg-[#FF6F00]"
                />
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

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow">
      <div className="p-3 bg-[#F0F0F0] rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-[#333333] text-center">{title}</h3>
      <p className="text-[#333333] text-center">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image, color }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow">
      <div className="relative">
        <div className={`w-24 h-24 ${color} rounded-full p-1`}>
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full rounded-full object-cover bg-white"
          />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-[#333333]">{name}</h3>
        <p className="text-[#00B8D9] font-medium">{role}</p>
      </div>
    </div>
  );
}
