import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueDisplayId(name: string | null | undefined): string {
  if (!name) return `team_${Math.floor(Math.random() * 10000)}`;

  // Convert name to lowercase and remove special characters
  const baseId = name
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_");

  // Add random suffix to ensure uniqueness
  const randomSuffix = Math.floor(Math.random() * 1000);

  return `${baseId}_${randomSuffix}`;
}
