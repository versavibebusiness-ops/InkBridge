@echo off
echo InkBridge Development Setup
echo ===========================
echo.
echo This script will help you set up the InkBridge development environment.
echo.
echo Prerequisites:
echo - Node.js 18+ must be installed
echo - npm must be available
echo.
echo If you encounter any issues, please refer to DEVELOPMENT.md for troubleshooting steps.
echo.
pause

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to install dependencies.
    echo Please check DEVELOPMENT.md for troubleshooting steps.
    echo.
    pause
    exit /b %errorlevel%
)

echo.
echo Dependencies installed successfully!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo The application will be available at http://localhost:3000
echo.
pause