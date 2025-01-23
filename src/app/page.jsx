'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const preferredLocale = navigator.language.startsWith('es') ? 'es' : 'en';

    const timer = setTimeout(() => {
      router.push(`/${preferredLocale}`);
    }, 5000);

    // Limpiar el timer al desmontar el componente
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="grid place-items-center gap-2 w-screen h-screen">
      <div className=""> Mira Bart, este es un loquito </div>
      

    </main>
  );
}
