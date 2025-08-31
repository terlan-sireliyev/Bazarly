import type { ReactNode } from "react";
export interface Category {
  name: string;
  color: string;
  icon: ReactNode;
  sub: string[];
}
