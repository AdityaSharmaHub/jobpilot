import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <video src="/vid-3.mp4" className="absolute -z-10" autoPlay loop muted></video>
      <span className="text-6xl mb-10">🤖</span>
      <h1 className="text-6xl font-bold text-shadow-xs text-shadow-accent-foreground text-balance text-center">Your AI Powered Job Assistant</h1>
      {/* Coming Soon */}
      <h2 className="text-3xl font-medium my-10">Coming Soon... Stay tuned ✌️</h2>
    </main>
    </>
  );
}
