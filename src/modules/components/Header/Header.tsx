'use client';

import { usePathname } from "next/navigation";
import { HeaderUI } from "../ui/headerUI";

export function Header() {
  const path = usePathname();
  return <HeaderUI path={path} user={false} />;
}
