import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { auth } from "@/features/auth/config";

export async function MainNavigation() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-medium text-base hover:text-primary/90">
            RSSNS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/feeds" className="text-muted-foreground text-sm hover:text-foreground">
              Feeds
            </Link>
            <Link
              href="/collections"
              className="text-muted-foreground text-sm hover:text-foreground"
            >
              Collections
            </Link>
          </div>
        </div>
        <div>
          {session ? (
            <SignOutButton />
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
