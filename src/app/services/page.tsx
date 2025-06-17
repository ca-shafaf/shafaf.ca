import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive financial solutions tailored to your business needs. We help navigate 
          complex financial landscapes with expertise and precision.
        </p>
      </div>

      {/* Main Services */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Tax Planning & Advisory</h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Strategic tax planning</li>
              <li>• Tax compliance management</li>
              <li>• Tax audit assistance</li>
              <li>• International taxation</li>
              <li>• Direct & indirect tax advisory</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Learn More</Link>
            </Button>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Business Consultancy</h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Business process optimization</li>
              <li>• Financial analysis</li>
              <li>• Risk assessment</li>
              <li>• Growth strategy planning</li>
              <li>• Business restructuring</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Learn More</Link>
            </Button>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">GST & Compliance</h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• GST registration & filing</li>
              <li>• Compliance management</li>
              <li>• GST audit support</li>
              <li>• Input tax credit optimization</li>
              <li>• GST return preparation</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Learn More</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Financial Advisory</h3>
            <p className="text-gray-600 mb-6">
              Expert guidance on financial decisions, investment planning, and wealth management 
              strategies tailored to your business and personal goals.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Investment planning</li>
              <li>• Financial forecasting</li>
              <li>• Cash flow management</li>
              <li>• Wealth optimization</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Digital Finance Solutions</h3>
            <p className="text-gray-600 mb-6">
              Modern financial management using cutting-edge tools and software to streamline 
              your business operations.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Zoho implementation</li>
              <li>• Tally optimization</li>
              <li>• Excel automation</li>
              <li>• Digital transformation</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Need Customized Solutions?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Every business is unique. Let's discuss your specific requirements and create 
          a tailored solution for your success.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}
