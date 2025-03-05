import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Product Sayfası</h1>

      <br />

      <div>
        <Link href="/products/1">Ürün-1</Link>
        <Link href="/products/2">Ürün-2</Link>
        <Link href="/products/3">Ürün-3</Link>
      </div>
    </div>
  );
};

export default Product;
