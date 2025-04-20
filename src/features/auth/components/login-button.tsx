"use client";

import { MessageSquare } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function LoginButton() {
  return (
    <Button
      variant="outline"
      onClick={() => signIn("discord", { callbackUrl: "/" })}
      className="w-full"
    >
      <MessageSquare className="mr-2 h-4 w-4" />
      Continue with Discord
    </Button>
  );
}
