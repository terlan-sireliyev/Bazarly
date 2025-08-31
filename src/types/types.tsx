import type { ElementType } from "react";

export interface Category {
  name: string;
  color: string;
  icon: ElementType; // React component tipi
  sub: string[];
}
