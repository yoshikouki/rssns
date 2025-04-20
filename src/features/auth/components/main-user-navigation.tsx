import { LogOut, Settings, UserCircle, UserCog } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "../config";
import { SignOutButton } from "./sign-out-button";

export async function MainUserNavigation() {
  const session = await auth();

  if (!session) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link href="/auth" className="gap-2">
          <UserCircle className="h-5 w-5" />
          <span>Sign In</span>
        </Link>
      </Button>
    );
  }

  const userImage = session.user?.image;
  const userName = session.user?.name || "User";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={userImage || undefined} alt={userName} />
            <AvatarFallback>{userInitial}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2">
            <UserCog className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="flex w-full items-center gap-2 text-destructive">
            <LogOut className="h-4 w-4" />
            <SignOutButton />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
