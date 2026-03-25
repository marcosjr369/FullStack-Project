"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogIn, Search, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  showSearch?: boolean;
  showAuth?: boolean;
}

export const Header = ({ showSearch = true, showAuth = true }: HeaderProps) => {
  const pathname = usePathname();
  
  // Não mostrar header em páginas de autenticação
  if (pathname?.startsWith("/auth")) return null;

  return (
    <header className="sticky top-0 z-50 flex h-24 shrink-0 items-center justify-between gap-4 border-b bg-background/95 px-6 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex flex-1 items-center gap-3 md:max-w-md lg:max-w-lg">
        <SidebarTrigger className="-ml-2" />
        
        {showSearch && <SearchBar />}
      </div>

      {showAuth && <AuthButtons />}
    </header>
  );
};

// Componente de busca separado
const SearchBar = () => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar cursos..."
        className="h-10 w-full rounded-full border border-input bg-background pl-9 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Buscar cursos"
      />
    </div>
  );
};

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        className="hidden md:inline-flex px-3"
        asChild
      >
        <Link href="/auth/sign-up">
          <UserPlus className="mr-2 h-4 w-4 md:hidden" />
          <span className="hidden md:inline">Criar conta</span>
          <span className="md:hidden">Registro</span>
        </Link>
      </Button>
      
      <Button 
        asChild
        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3"
      >
        <Link href="/auth/sign-in">
          <LogIn className="h-4 w-4" />
          <span className="hidden sm:inline">Entrar</span>
          <span className="sm:hidden">Login</span>
        </Link>
      </Button>
    </div>
  );
};