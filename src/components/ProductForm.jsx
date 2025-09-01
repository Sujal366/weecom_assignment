import React, { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ProductForm = ({ product, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    brand: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        price: product.price?.toString() || "",
        category: product.category || "",
        stock: product.stock?.toString() || "",
        description: product.description || "",
        brand: product.brand || "",
      });
    } else {
      // Reset form when no product is being edited
      setFormData({
        title: "",
        price: "",
        category: "",
        stock: "",
        description: "",
        brand: "",
      });
    }
    setErrors({});
  }, [product]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (
      !formData.price ||
      isNaN(parseFloat(formData.price)) ||
      parseFloat(formData.price) <= 0
    ) {
      newErrors.price = "Price must be a valid positive number";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (
      !formData.stock ||
      isNaN(parseInt(formData.stock)) ||
      parseInt(formData.stock) < 0
    ) {
      newErrors.stock = "Stock must be a valid non-negative number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const submitData = {
      ...formData,
      title: formData.title.trim(),
      category: formData.category.trim(),
      brand: formData.brand.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };
    onSubmit(submitData);
  };

  return (
    <Card className="w-full max-w-md mx-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
      <CardHeader>
        <CardTitle>{product ? "Edit Product" : "Add New Product"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title *
            </label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Product title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price *
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="0.00"
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">{errors.price}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category *
            </label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="Product category"
            />
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium mb-1">
              Stock *
            </label>
            <Input
              id="stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              required
              placeholder="0"
            />
            {errors.stock && (
              <p className="text-red-500 text-xs mt-1">{errors.stock}</p>
            )}
          </div>

          <div>
            <label htmlFor="brand" className="block text-sm font-medium mb-1">
              Brand
            </label>
            <Input
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Product brand"
            />
            {errors.brand && (
              <p className="text-red-500 text-xs mt-1">{errors.brand}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ borderColor: "rgb(226, 232, 240)" }}
              placeholder="Product description"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading
                ? "Saving..."
                : product
                ? "Update Product"
                : "Add Product"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
