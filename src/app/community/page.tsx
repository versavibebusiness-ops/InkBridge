'use client'

import Link from 'next/link'

export default function Community() {
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
                <Link href="/community" className="text-primary-600 border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium">
                  Community
                </Link>
                <Link href="/resources" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
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
              <Link href="/dashboard" className="ml-4 text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Community</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Connect with fellow young authors, share your experiences, and grow together.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Discussion Forums</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Join topic-based discussions with other authors. Share your writing experiences, ask questions, and get feedback.
                </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Join discussions &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Author Groups</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Connect with authors in your genre or age group. Collaborate on projects and share resources.
                </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Find groups &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Writing Challenges</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Participate in community writing challenges to improve your skills and connect with other writers.
                </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    View challenges &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Blog & Resources</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Read articles written by successful young authors and industry professionals. Learn tips and tricks to improve your craft.
                </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Read articles &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Events & Workshops</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Join virtual or in-person events to learn from published authors and connect with the community.
                </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    View events &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Mentorship Program</h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                    Get paired with experienced authors who can guide you through your publishing journey.
                  </p>
                <div className="mt-6">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Apply now &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-700 rounded-lg shadow-xl">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to join our community?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-primary-200">
                Connect with fellow young authors, share your work, and grow your writing skills.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50">
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}