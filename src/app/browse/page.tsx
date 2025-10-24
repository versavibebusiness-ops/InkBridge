'use client'

import Link from 'next/link'

export default function Browse() {
  // Sample book data
  const books = [
    {
      id: 1,
      title: "The Dragon's Secret",
      author: "Alex Morgan",
      genre: "Fantasy",
      description: "A young dragon rider discovers a secret that could change the fate of two worlds.",
      rating: 4.8,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Stars Beyond Reach",
      author: "Jamie Chen",
      genre: "Science Fiction",
      description: "In a distant future, humanity's last hope lies in the stars beyond their reach.",
      rating: 4.6,
      cover: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Whispers in the Dark",
      author: "Taylor Reed",
      genre: "Mystery",
      description: "A detective investigates a series of mysterious disappearances in a small town.",
      rating: 4.7,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "Summer of Dreams",
      author: "Jordan Smith",
      genre: "Romance",
      description: "A coming-of-age romance that blossoms during a memorable summer.",
      rating: 4.5,
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      title: "The Forgotten Path",
      author: "Riley Johnson",
      genre: "Adventure",
      description: "Two friends embark on a journey to find a legendary path that leads to hidden treasures.",
      rating: 4.9,
      cover: "https://images.unsplash.com/photo-1515244679342-05bbf8c7a7dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      title: "Echoes of the Past",
      author: "Casey Williams",
      genre: "Historical Fiction",
      description: "A young historian uncovers family secrets while researching their ancestral home.",
      rating: 4.4,
      cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
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
                <Link href="/browse" className="text-primary-600 border-b-2 border-primary-500 px-1 pt-1 text-sm font-medium">
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
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Browse Books</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover amazing stories from young authors around the world.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
            <option>All Genres</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Romance</option>
            <option>Mystery</option>
            <option>Horror</option>
            <option>Non-Fiction</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
            <option>Sort by: Newest</option>
            <option>Sort by: Top Rated</option>
            <option>Sort by: Most Popular</option>
          </select>
          <input
            type="text"
            placeholder="Search books..."
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        {/* Books Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={book.cover} alt={book.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {book.genre}
                    </span>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-600">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{book.title}</h3>
                  <p className="mt-1 text-gray-600">by {book.author}</p>
                  <p className="mt-3 text-gray-500">{book.description}</p>
                  <div className="mt-4">
                    <Link href={`/book/${book.id}`} className="text-primary-600 hover:text-primary-500 font-medium">
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                <span className="font-medium">24</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center bg-primary-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}