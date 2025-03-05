"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from './cookieBanner.module.css'

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Проверяем, установлена ли кука
    const cookies = document.cookie.split("; ").find(row => row.startsWith("cookieAccept="));
    if (cookies) {
      setAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookieAccept=true; path=/; max-age=31536000"; // 1 год
    setAccepted(true);
  };

  if (accepted) return null; // Если кука есть, не показываем баннер

  return (
    <div className={classes.banner}>
      <p>Мы используем <Link href={'/cookies-policy'}>cookies</Link> для лучшего опыта.</p>
      <button onClick={acceptCookies} className={classes.button}>
        Принять
      </button>
    </div>
  );
}
