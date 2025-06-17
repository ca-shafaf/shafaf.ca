import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Shafaf</span>
              <span className="block text-gray-600 mt-2">Chartered Accountant & Finance Professional</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Expert in taxation, business consultancy, and financial advisory services.
              Helping businesses navigate financial complexities with clarity and confidence.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Tax Planning & Advisory</h3>
              <p className="text-gray-600">
                Creative tax planning and optimization strategies tailored to your business needs.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Business Consultancy</h3>
              <p className="text-gray-600">
                Expert guidance on business processes, compliance, and financial strategy.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">GST & Compliance</h3>
              <p className="text-gray-600">
                Comprehensive GST solutions and compliance management for businesses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Educational Content</h2>
            <p className="text-xl text-gray-600 mb-12">
              Stay updated with the latest in finance through our educational content
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Instagram Reels</h3>
                <p className="text-gray-600 mb-4">
                  Follow our trending content on tax provisions, startup finance, and GST updates.
                </p>
                <Button asChild variant="outline">
                  <a href="https://instagram.com/shafaf.finance" target="_blank" rel="noopener noreferrer">
                    Follow on Instagram
                  </a>
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI for Accountants Course</h3>
                <p className="text-gray-600 mb-4">
                  Learn how AI is transforming the accounting and finance industry.
                </p>
                <Button asChild variant="outline">
                  <Link href="/course">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
