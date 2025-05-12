import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="relative mx-auto w-24 h-24">
              <div className="absolute inset-0 bg-[#F0F0F0] rounded-full"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <MapPin className="h-10 w-10 text-[#D32F2F]" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center text-white font-bold">
                ?
              </div>
            </div>
            <h1 className="text-6xl font-bold text-[#333333]">404</h1>
            <h2 className="text-2xl font-semibold text-[#333333]">Page Not Found</h2>
            <p className="text-[#333333] mt-2">
              Looks like you've taken a wrong turn. Don't worry, even the best drivers get lost sometimes.
            </p>
          </div>

          <div className="bg-[#F0F0F0] p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A8D0E6] flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-[#333333]">Check the URL for typos</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A8D0E6] flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-[#333333]">Return to the homepage</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A8D0E6] flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-[#333333]">Contact support if you need help</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-[#A8D0E6] text-[#333333]">
              <Link to="/#download">Download App</Link>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#333333]">
              Need help?{" "}
              <Link to="#" className="text-[#00B8D9] hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
