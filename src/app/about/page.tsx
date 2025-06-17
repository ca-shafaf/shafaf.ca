import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Profile Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Shafaf</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Shafaf is a qualified Chartered Accountant and a passionate finance professional with extensive experience 
              in taxation, business consultancy, and financial advisory. As a co-founder and partner at a reputed 
              consultancy firm, he brings a sharp understanding of Indian tax laws, GST, and compliance frameworks.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, Shafaf has carved a niche in creative tax planning, forensic financial analysis, 
              and optimizing business processes using tools like Zoho, Tally, and Excel. His client base spans 
              industries such as healthcare, real estate, and digital media, where he offers personalized 
              strategies tailored to modern business needs.
            </p>
          </div>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Areas of Expertise</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Tax Planning & Compliance</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Business Consultancy</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Financial Advisory</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>GST Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Forensic Financial Analysis</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Education & Content Creation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education & Content Creation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Financial Education</h3>
            <p className="text-gray-600 mb-6">
              Committed to financial literacy and education, Shafaf actively creates content on trending 
              and misunderstood tax provisions, startup finance, and loopholes in GST and income tax laws. 
              His content bridges the gap between technical tax laws and the common man, making finance 
              both thrilling and relatable.
            </p>
            <Button asChild variant="outline">
              <Link href="/content">View Content</Link>
            </Button>
          </Card>
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Upcoming Projects</h3>
            <p className="text-gray-600 mb-6">
              Currently developing an online course titled "Basics of AI for Accountants, Finance Professionals, 
              and Commerce Students." Also working on a book to empower Indian students with real-world 
              financial insights.
            </p>
            <Button asChild variant="outline">
              <Link href="/course">Learn More</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 p-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help optimize your business finances and ensure compliance 
          while maximizing growth opportunities.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}
