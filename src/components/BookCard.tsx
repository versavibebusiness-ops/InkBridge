import Link from 'next/link'

interface BookCardProps {
  id: number
  title: string
  author: string
  genre: string
  description: string
  rating: number
  cover: string
}

export default function BookCard({ id, title, author, genre, description, rating, cover }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={cover} alt={title} />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              {genre}
            </span>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-gray-600">{rating}</span>
            </div>
          </div>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">by {author}</p>
          <p className="mt-3 text-gray-500">{description}</p>
          <div className="mt-4">
            <Link href={`/book/${id}`} className="text-primary-600 hover:text-primary-500 font-medium">
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}