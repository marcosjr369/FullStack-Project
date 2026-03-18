"use client"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  BookUp2,
  ChartArea,
  MessageCircle,
  SquareDashedBottomCode,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItem = {
  label: string;
  href: string; 
  icon: React.ElementType;
  admin?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Cursos",
    href: "/",
    icon: SquareDashedBottomCode,
  },
  {
    label: "Meus Cursos",
    href: "/my-courses",
    icon: BookUp2,
  },
  {
    label: "Ranking",
    href: "/ranking",
    icon: Trophy,
  },
];

const ADMIN_ITEMS: NavItem[] = [
  {
    label: "Estatística",
    href: "/admin",
    icon: ChartArea,
    admin: true,
  },
  {
    label: "Gerenciar Cursos",
    href: "/admin/courses",
    icon: BookOpen,
    admin: true,
  },
  {
    label: "Gerenciar Usuários",
    href: "/admin/users",
    icon: Users,
    admin: true,
  },
  {
    label: "Gerenciar Comentários",
    href: "/admin/comments",
    icon: MessageCircle,
    admin: true,
  },
];

interface NavItemsProps {
  isAdmin?: boolean;
}

export const NavItems = ({ isAdmin = true }: NavItemsProps) => {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.href;
    
    return (
      <SidebarMenuItem key={item.href}>
        <SidebarMenuButton 
          asChild 
          tooltip={item.label}
          isActive={isActive}
        >
          <Link href={item.href}>
            <item.icon className={cn(
              "transition-all",
              isActive 
                ? "text-primary" 
                : "text-muted-foreground group-data-[collapsible=icon]:text-white"
            )} />
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {/* Itens principais */}
        {NAV_ITEMS.map(renderNavItem)}
        
        {/* Itens de admin (condicional) */}
        {isAdmin && ADMIN_ITEMS.length > 0 && (
          <>
            <SidebarSeparator className="my-2" />
            {ADMIN_ITEMS.map(renderNavItem)}
          </>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const NavItemsCompact = ({ isAdmin = true }: NavItemsProps) => {
  const pathname = usePathname();
  
  const allItems = isAdmin 
    ? [...NAV_ITEMS, ...ADMIN_ITEMS] 
    : NAV_ITEMS;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {allItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index === NAV_ITEMS.length && <SidebarSeparator className="my-2" />}
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                tooltip={item.label}
                isActive={pathname === item.href}
              >
                <Link href={item.href}>
                  <item.icon className={cn(
                    "transition-all",
                    pathname === item.href 
                      ? "text-primary" 
                      : "text-muted-foreground group-data-[collapsible=icon]:text-white"
                  )} />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </React.Fragment>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};