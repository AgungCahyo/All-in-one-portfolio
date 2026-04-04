#!/bin/bash

# Videographer Portfolio - Setup Script
# Jalankan: chmod +x setup.sh && ./setup.sh

echo "🎬 Videographer Portfolio Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18.17 or later"
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit app/page.tsx to add your content"
echo "2. Run 'npm run dev' to start development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For deployment:"
echo "1. Push to GitHub"
echo "2. Connect to Vercel for automatic deployment"
echo ""
echo "Need help? Check QUICKSTART.md for detailed instructions"
