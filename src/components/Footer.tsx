export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Qualified Chartered Accountant and finance professional with expertise in taxation, 
              business consultancy, and financial advisory.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Tax Planning</li>
              <li>Business Consultancy</li>
              <li>Financial Advisory</li>
              <li>GST Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contact@shafaf.com</li>
              <li>LinkedIn: /in/shafaf</li>
              <li>Instagram: @shafaf.finance</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Shafaf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
