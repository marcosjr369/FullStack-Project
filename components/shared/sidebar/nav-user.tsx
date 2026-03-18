import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

export const NavUser = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="py-2">
          <Link href="/auth/login" passHref className="w-full">
            <Button variant="outline" className="w-full h-10">Entrar</Button>
          </Link>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
