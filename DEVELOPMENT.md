# InkBridge Development Guide

## Prerequisites

Before you can run this application, you'll need to install:

1. [Node.js](https://nodejs.org/) (version 18 or higher)
2. npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

Due to Windows PowerShell execution policy restrictions, you may need to adjust your execution policy:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:

```bash
npm install
```

## Running the Development Server

After installing dependencies, you can start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

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

## Troubleshooting

### PowerShell Execution Policy Issues

If you encounter execution policy errors on Windows, you have a few options:

1. Run PowerShell as Administrator and execute:
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

2. Use Command Prompt instead of PowerShell

3. Temporarily bypass the policy for a single command:
   ```powershell
   powershell -ExecutionPolicy Bypass -File "script.ps1"
   ```

### Dependency Installation Issues

If you have trouble installing dependencies:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete node_modules and package-lock.json:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall dependencies:
   ```bash
   npm install
   ```