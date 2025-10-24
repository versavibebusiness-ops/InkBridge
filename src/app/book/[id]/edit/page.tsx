'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function EditBook({ params }: { params: { id: string } }) {
  const [bookData, setBookData] = useState({
    title: 'The Dragon\'s Secret',
    description: 'A young dragon rider discovers a secret that could change the fate of two worlds.',
    genre: 'Fantasy',
    price: 4.99,
    status: 'Published'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save book logic would go here
    console.log('Book saved:', bookData)
  }

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
                <Link href="/dashboard" className="text-primary-600 border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/community" className="text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 border-b-2 px-1 pt-1 text-sm font-medium">
                  Community
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Book</h1>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Book Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={bookData.title}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={bookData.description}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                  Genre
                </label>
                <div className="mt-1">
                  <select
                    id="genre"
                    name="genre"
                    value={bookData.genre}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option>Fantasy</option>
                    <option>Science Fiction</option>
                    <option>Romance</option>
                    <option>Mystery</option>
                    <option>Horror</option>
                    <option>Non-Fiction</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    step="0.01"
                    min="0"
                    value={bookData.price}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <div className="mt-1">
                  <select
                    id="status"
                    name="status"
                    value={bookData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option>Draft</option>
                    <option>Published</option>
                    <option>Archived</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}