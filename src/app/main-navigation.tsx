import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { auth } from "@/features/auth/config";
import { cn } from "@/lib/utils";

export async function MainNavigation() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">RSSNS</span>
          </Link>
          <nav className="flex items-center space-x-6 font-medium text-sm">
            <Link href="/feeds" className={cn("transition-colors hover:text-foreground/80")}>
              Feeds
            </Link>
            <Link
              href="/collections"
              className={cn("transition-colors hover:text-foreground/80")}
            >
              Collections
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {session ? (
            <SignOutButton />
          ) : (
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
