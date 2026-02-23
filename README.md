# NovaMart - Everyday Essentials, Elevated

A modern, premium e-commerce storefront built with Next.js. This is a front-end only demonstration featuring a full shopping experience without the need for a backend or database.

## ✨ Features

- **🛍️ Complete Shopping Flow**: Product discovery, cart management, and a mock checkout process.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **🔍 Advanced Search & Filtering**: Real-time product search and category/price/rating filters on the shop page.
- **🛒 Persistent Cart**: Cart data is stored in `localStorage` so it persists across page refreshes and sessions.
- **✨ Premium UI/UX**: Smooth transitions, glassmorphism effects, and a cohesive design system using HSL variables.
- **🚀 Static Mock Data**: 18 pre-populated products across Apparel, Accessories, and Home categories.
- **🔔 Toast Notifications**: Contextual feedback for user actions like adding items to the cart.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Framer Motion (light usage)

## 🚀 Getting Started

### Local Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
npm start
```

## 🌐 Deployment (Vercel)

This project is ready to be deployed to Vercel immediately:

1. Push the code to a GitHub/GitLab/Bitbucket repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect the Next.js project and deploy it.
4. No environment variables are required as this is a front-end only project.

## 📝 Important Notes

- **Data Persistence**: The shopping cart uses the browser's `localStorage`. No data is sent to a server.
- **Mock Checkout**: The checkout process validates form input but does not process real payments or create orders in a database.
- **Dynamic Routing**: Product pages are generated dynamically based on the product `slug` from the static data in `src/data/products.ts`.
