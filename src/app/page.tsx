export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">CobaltoSec</h1>
        <p className="text-lg md:text-2xl max-w-xl mx-auto mb-6">
          Seguridad ofensiva, hacking ético y proyectos personales.
        </p>
        <a
          href="#"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          Ver proyectos
        </a>
      </div>
    </main>
  );
}
