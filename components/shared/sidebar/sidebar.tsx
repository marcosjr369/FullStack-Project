import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavItems } from "./nav-items";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavUser } from "./nav-user";

export function AppSidebar() {
  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="h-25">
          <div className="flex-1 flex justify-center items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex justify-center items-center">
              D
            </div>
            <h1 className="group-data-[state=collapsed]:hidden">
              DayoTec Tecnologias
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <NavItems />
        </SidebarContent>
        <SidebarFooter >
          <NavUser />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}
