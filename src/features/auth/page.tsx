import { LoginButton } from "./components/login-button";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-4 rounded-lg border p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-2xl">Welcome to RSSNS</h1>
          <p className="text-gray-500">Sign in to continue</p>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
