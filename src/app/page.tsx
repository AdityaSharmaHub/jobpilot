import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Your AI Powered Job Assistant</h1>
      {/* Coming Soon */}
      <h2 className="text-3xl font-medium my-10">Coming Soon... Stay tuned ✌️</h2>
      <Button className="cursor-pointer text-2xl p-6">Test Me 😊</Button>
    </main>
  );
}
