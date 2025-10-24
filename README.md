# InkBridge - Self-Publishing Platform for Young Authors

InkBridge is a modern web application designed to empower young authors to publish their creative works and connect with readers worldwide.

## Pages

- **Home Page** (`/`): Landing page with platform overview and call-to-action
- **Publish Page** (`/publish`): Tools and forms for authors to publish their books
- **Browse Page** (`/browse`): Book discovery interface with search and filtering
- **Author Dashboard** (`/dashboard`): Author's control panel to manage books and track performance
- **Login Page** (`/login`): User authentication
- **Signup Page** (`/signup`): New user registration
- **Book Edit Page** (`/book/[id]/edit`): Edit individual book details

## Features

- **Easy Publishing**: Simple tools to publish your work in minutes
- **Global Reach**: Distribute your books to readers around the world
- **Community Support**: Connect with other young authors, get feedback, and grow together
- **Reader Discovery**: Browse and discover amazing stories from young talent
- **Author Dashboard**: Track your book sales, revenue, and performance metrics
- **Author Resources**: Access tools and guides to improve your writing

## Tech Stack

- **Frontend**: Next.js 14 with React Server Components
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd inkbridge
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
inkbridge/
├── src/
│   ├── app/              # App Router pages
│   │   ├── browse/       # Book browsing page
│   │   ├── login/        # User login page
│   │   ├── publish/      # Book publishing page
│   │   ├── signup/       # User registration page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable components (to be added)
├── public/               # Static assets (to be added)
├── styles/               # Global styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on the GitHub repository.