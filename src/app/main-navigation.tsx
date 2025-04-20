import { RssIcon } from "lucide-react";
import Link from "next/link";
import { MainUserNavigation } from "@/features/auth/components/main-user-navigation";

export async function MainNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-base hover:text-primary/90"
          >
            <RssIcon className="h-5 w-5" />
            <span>RSSNS</span>
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
        <MainUserNavigation />
      </nav>
    </header>
  );
}
