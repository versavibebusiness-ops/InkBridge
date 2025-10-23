'use client'

import Link from 'next/link'

export default function Resources() {
  const resources = [
    {
      title: "Writing Tips for Beginners",
      description: "Essential tips to help you start your writing journey with confidence.",
      category: "Writing",
      link: "#"
    },
    {
      title: "How to Create Compelling Characters",
      description: "Learn how to develop characters that readers will love and remember.",
      category: "Character Development",
      link: "#"
    },
    {
      title: "Publishing Your First Book",
      description: "A step-by-step guide to self-publishing your debut novel.",
      category: "Publishing",
      link: "#"
    },
    {
      title: "Marketing Your Book Online",
      description: "Effective strategies to promote your book and reach more readers.",
      category: "Marketing",
      link: "#"
    },
    {
      title: "Understanding Copyright and Licensing",
      description: "Important legal information every author should know.",
      category: "Legal",
      link: "#"
    },
    {
      title: "Building Your Author Platform",
      description: "How to establish your presence as an author in the digital world.",
      category: "Branding",
      link: "#"
    }
  ]

  const faqs = [
    {
      question: "How old do I need to be to publish on InkBridge?",
      answer: "Authors must be at least 13 years old to publish on InkBridge. For authors under 18, we require parental consent during the registration process."
    },
    {
      question: "Do I retain the rights to my work?",
      answer: "Yes, you retain all rights to your work. InkBridge only receives a license to distribute your book through our platform."
    },
    {
      question: "How much does it cost to publish?",
      answer: "Publishing on InkBridge is completely free. We only take a small percentage of sales as our commission."
    },
    {
      question: "How do I get paid for my book sales?",
      answer: "We pay authors monthly via direct deposit or PayPal. Payments are made for all sales after deducting platform fees."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary-600">InkBridge</span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="/" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Home
                </Link>
                <Link href="/publish" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Publish
                </Link>
                <Link href="/browse" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Browse
                </Link>
                <Link href="/community" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Community
                </Link>
                <Link href="/resources" className="text-primary-600 border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium">
                  Resources
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Sign in
              </Link>
              <Link href="/signup" className="ml-4 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Resources for Authors</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tools, guides, and tips to help you on your publishing journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Writing Guides</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {resource.category}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{resource.title}</h3>
                  <p className="mt-2 text-gray-500">{resource.description}</p>
                  <div className="mt-4">
                    <Link href={resource.link} className="text-primary-600 hover:text-primary-500 font-medium">
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-6 text-gray-900">Need More Help?</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Our support team is here to help you with any questions about publishing on InkBridge.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contact Support</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get in touch with our support team for personalized assistance.
                </p>
              </div>
              <div>
                <Link href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}