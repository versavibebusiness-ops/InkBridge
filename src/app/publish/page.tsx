'use client'

import Link from 'next/link'

export default function Publish() {
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
                <Link href="/publish" className="text-primary-600 border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium">
                  Publish
                </Link>
                <Link href="/browse" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Browse
                </Link>
                <Link href="/community" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Publish Your Book</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Share your story with the world. Follow these simple steps to publish your book on InkBridge.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="flex flex-col">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Prepare Your Manuscript</h3>
                <p className="mt-2 text-base text-gray-500">
                  Format your manuscript according to our guidelines. We accept .docx, .pdf, and .txt files.
                </p>
                <div className="mt-4">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    View formatting guidelines &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Design Your Book</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create a compelling cover and write a description that will attract readers.
                </p>
                <div className="mt-4">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Cover design tips &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Publish & Promote</h3>
                <p className="mt-2 text-base text-gray-500">
                  Set your price, choose your categories, and start promoting your book to readers.
                </p>
                <div className="mt-4">
                  <Link href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    Marketing resources &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-6 text-gray-900">Upload Your Manuscript</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in the details and upload your book files.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Book Title</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    className="max-w-lg block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your book title"
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <textarea
                    rows={4}
                    className="max-w-lg shadow-sm block w-full focus:ring-primary-500 focus:border-primary-500 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Describe your book in a few sentences"
                  ></textarea>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Genre</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <select className="max-w-lg block focus:ring-primary-500 focus:border-primary-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                    <option>Fantasy</option>
                    <option>Science Fiction</option>
                    <option>Romance</option>
                    <option>Mystery</option>
                    <option>Horror</option>
                    <option>Non-Fiction</option>
                    <option>Other</option>
                  </select>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Manuscript File</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <input
                      type="file"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    />
                  </div>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Cover Image</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <input
                      type="file"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    />
                  </div>
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Submit for Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}