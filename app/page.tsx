"use client"

import { useEffect, useState } from "react";
import { Product } from '@prisma/client';

import styles from "./page.module.scss";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  const getData = async () => {
    const result = await fetch(`/api/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async res => await res.json());
    setProducts(result);
  }

  const getItemData = async (id: number) => {
    const result = await fetch(`/api/products/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async res => await res.json());
    setProduct(result);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <main className={styles.main}>
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product.id} onClick={() => getItemData(product.id)}>{product.name}</li>
          ))}
        </ul>
      </div>

      <br />
      <br />

      {product &&
        <div>
          <h3>Product Info</h3>
          <div>
            <div>Id: {product.id}</div>
            <div>Name: {product.name}</div>
            <div>Price: {product.price}</div>
          </div>
        </div>
      }
    </main>
  );
}
