import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Educational Content</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest in finance through our educational content. Making complex 
          financial concepts simple and accessible for everyone.
        </p>
      </div>

      {/* Instagram Content */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Instagram Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Tax Updates</h3>
            <p className="text-gray-600 mb-6">
              Stay informed about the latest tax provisions, amendments, and their implications 
              for businesses and individuals.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://instagram.com/shafaf.finance" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Startup Finance</h3>
            <p className="text-gray-600 mb-6">
              Essential financial insights for startups, covering funding, compliance, 
              and growth strategies.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://instagram.com/shafaf.finance" target="_blank" rel="noopener noreferrer">
                View Stories
              </a>
            </Button>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">GST Insights</h3>
            <p className="text-gray-600 mb-6">
              Breaking down complex GST provisions and sharing practical insights for 
              better compliance.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://instagram.com/shafaf.finance" target="_blank" rel="noopener noreferrer">
                Watch Reels
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Upcoming Course */}
      <section className="mb-20">
        <div className="bg-gray-50 p-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">AI for Accountants Course</h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn how artificial intelligence is transforming the accounting and finance industry. 
              Master the tools and techniques that will shape the future of finance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Course Highlights</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Introduction to AI in Finance</li>
                  <li>• Automation Tools for Accountants</li>
                  <li>• Data Analytics in Accounting</li>
                  <li>• Future of Financial Technology</li>
                  <li>• Practical Case Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Who Should Attend</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Chartered Accountants</li>
                  <li>• Finance Professionals</li>
                  <li>• Commerce Students</li>
                  <li>• Business Owners</li>
                  <li>• Financial Analysts</li>
                </ul>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/course">Learn More About the Course</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Book */}
      <section>
        <Card className="p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Upcoming Book</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A comprehensive guide for Indian students and professionals, bridging the gap 
              between academic knowledge and real-world financial practices.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Get Notified on Release</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
