import { redirect } from 'next/navigation';
export default function Home() {
  const preferredLocale = navigator.language.startsWith('es') ? 'es' : 'en';
  redirect(`/${preferredLocale}`);


  return (
    <main className="grid place-items-center  w-screen h-screen ">
      <div className=""> Mira Bart, este es un loquito</div>
    </main>
  );
}
