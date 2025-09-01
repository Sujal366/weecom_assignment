import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { productApi } from "../services/api";
import ProductTable from "./ProductTable";
// import ProductForm from "./ProductForm";

const ProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

    const queryClient = useQueryClient();
    const limit = 10;

    const {
      data: productsData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["products", currentPage, searchTerm, selectedCategory],
      queryFn: () => {
        const params = {
          limit,
          skip: currentPage * limit,
          search: searchTerm,
          delay: 1000, // Artificial delay for demo
        };
        if (selectedCategory) {
          params.category = selectedCategory;
        }
        return productApi.getProducts(params);
      },
      keepPreviousData: true,
    });

    const totalPages = productsData ? Math.ceil(productsData.total / limit) : 0;
    const products = productsData?.products || [];

    if (error) {
      return (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-destructive mb-4" />
          <h3 className="text-lg font-medium text-destructive mb-2">
            Error loading products
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Product Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your products with ease
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductTable
              products={products}
              isLoading={isLoading}
              // onEdit={handleEditProduct}
              // onDelete={handleDeleteProduct}
              // isDeleting={isDeleting}
            />
          </CardContent>
        </Card>
      </div>

      {/* Product Form Dialog */}
      
    </div>
  );
}

export default ProductDashboard
