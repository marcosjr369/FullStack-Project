import { Header } from "@/components/shared/header";
import { AppSidebar } from "@/components/shared/sidebar/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col overflow-auto p-6 gap-5">
          {" "}
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
