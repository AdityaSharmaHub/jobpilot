export default function Home() {
  return (
    <>
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden">
      <video src="/vid-3.mp4" className="hidden md:flex absolute -z-10 min-h-max" autoPlay loop muted></video>
      <span className="text-6xl mb-10">🤖</span>
      <h1 className="text-4xl md:text-6xl font-bold text-shadow-xs text-shadow-accent-foreground text-balance text-center">Your AI Powered Job Assistant</h1>
      <h2 className="text-base md:text-3xl font-medium my-10 text-center">Coming Soon... Stay tuned ✌️</h2>
    </main>
    </>
  );
}
