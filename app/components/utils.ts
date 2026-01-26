import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------------------------------- */
/* UTILITIES                                                                   */
/* -------------------------------------------------------------------------- */

export const DEMO_AGENT_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2144&auto=format&fit=crop";
export const VIDEO_ID = "HVPZVThbN7s";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
