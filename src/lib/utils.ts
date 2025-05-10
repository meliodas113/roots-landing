import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeAAI63W--Qg6zBPzgLK4XhzOlv1iR8m0luEKVN5Oupg0RU3A/viewform";

export const USDC_LOGO = "/assets/icons/USDC.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
