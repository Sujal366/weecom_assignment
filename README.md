# Product Dashboard

A modern, responsive product management dashboard built with React, TailwindCSS, and shadcn/ui components. This application integrates with the DummyJSON API to provide full CRUD operations for products.

## Features

### 🎨 UI/UX

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with TailwindCSS and shadcn/ui components
- **Loading States**: Skeleton loaders and proper loading indicators
- **Error Handling**: Graceful error states with retry functionality

### 📊 Data Management

- **Product Listing**: Display products in a clean, sortable table
- **Search Functionality**: Real-time search through product names
- **Pagination**: Navigate through large datasets efficiently
- **CRUD Operations**: Create, Read, Update, and Delete products

### 🔧 Technical Features

- **React Query**: Efficient data fetching with caching and background updates
- **API Integration**: Full integration with DummyJSON API
- **Form Validation**: Proper form handling with validation
- **State Management**: Optimistic updates and proper state synchronization

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **TanStack Query** - Data fetching and caching
- **Axios** - HTTP client
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weecom_assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   └── skeleton.jsx
│   ├── ProductDashboard.jsx  # Main dashboard component
│   ├── ProductForm.jsx       # Add/Edit product form
│   └── ProductTable.jsx      # Products table component
├── services/
│   └── api.js              # API service functions
├── lib/
│   └── utils.js            # Utility functions
├── App.jsx                 # Main app component
└── index.css              # Global styles
```

## API Integration

The application uses the [DummyJSON API](https://dummyjson.com/docs/products) for all product operations:

- **GET** `/products` - Fetch products with pagination
- **GET** `/products/search` - Search products
- **POST** `/products/add` - Add new product
- **PUT** `/products/:id` - Update product
- **DELETE** `/products/:id` - Delete product

## Features in Detail

### Product Dashboard

- Clean, modern interface with header and main content area
- Search bar for filtering products by name
- Add Product button that opens a modal form
- Responsive design that adapts to different screen sizes

### Product Table

- Displays products with columns: Title, Price, Category, Stock
- Stock levels are color-coded (green for high stock, yellow for low, red for out of stock)
- Edit and Delete buttons for each product
- Loading skeletons while data is being fetched
- Empty state when no products are found

### Product Form

- Modal dialog for adding and editing products
- Form validation for required fields
- Pre-filled form when editing existing products
- Responsive form layout

### Pagination

- Previous/Next navigation buttons
- Current page indicator
- Total count display
- Automatic page reset when searching
