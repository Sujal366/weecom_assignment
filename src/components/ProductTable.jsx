import React from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Edit, Trash2, Package } from "lucide-react";

const ProductTable = ({
  products,
  isLoading,
  onEdit,
  onDelete,
  isDeleting,
}) => {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 border rounded-lg"
            style={{ borderColor: "rgb(226, 232, 240)" }}
          >
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
          No products found
        </h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search or add a new product.
        </p>
      </div>
    );
  }

  return (
    <div
      className="overflow-x-auto"
      style={{ borderColor: "rgb(226, 232, 240)" }}
    >
      <table className="w-full" style={{ borderColor: "rgb(226, 232, 240)" }}>
        <thead>
          <tr
            className="border-b bg-muted/50"
            style={{
              borderColor: "rgb(226, 232, 240)",
              backgroundColor: "hsl(210 40% 96% / 0.5)",
            }}
          >
            <th className="text-left p-4 font-medium">Title</th>
            <th className="text-left p-4 font-medium">Price</th>
            <th className="text-left p-4 font-medium">Category</th>
            <th className="text-left p-4 font-medium">Stock</th>
            <th className="text-left p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b hover:bg-muted/30 transition-colors"
              style={{ borderColor: "rgb(226, 232, 240)" }}
            >
              <td className="p-4">
                <div>
                  <div className="font-medium">{product.title}</div>
                  {product.brand && (
                    <div className="text-sm text-muted-foreground">
                      {product.brand}
                    </div>
                  )}
                </div>
              </td>
              <td className="p-4">
                <span className="font-medium">${product.price}</span>
              </td>
              <td className="p-4">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  style={{ backgroundColor: "hsl(222.2 47.4% 11.2% / 0.1)" }}
                >
                  {product.category}
                </span>
              </td>
              <td className="p-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : product.stock > 0
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock} in stock
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(product)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(product.id)}
                    disabled={isDeleting}
                    className="h-8 w-8 p-0 text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
