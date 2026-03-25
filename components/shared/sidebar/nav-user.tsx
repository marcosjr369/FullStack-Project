import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

export const NavUser = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="py-2 group-data-[state=collapsed]:hidden">
          <Link href="/auth/sign-in" passHref className="w-full">
            <Button className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90">Entrar</Button>
          </Link>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
