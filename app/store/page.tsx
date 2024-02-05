"use client"

import { useEffect, useState } from "react";
import { Store } from '@prisma/client';

import styles from "./page.module.scss";

export default function Home() {
  const [stores, setStores] =  useState<Store[]>([]);

  const getData = async () => {
    const result = await fetch(`/api/stores`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async res => await res.json());
    setStores(result);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <main className={styles.main}>
      <h1>Stores</h1>
      
      <ul>
        {stores.map(store => (
          <li key={store.name}>{store.name}</li>
        ))}
      </ul>
    </main>
  );
}
