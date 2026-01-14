import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import * as React from 'react';
import AppLogo from '@/components/app-logo';
import { UserMenuContent } from '@/components/user-menu-content';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

export function FrontendHeader() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'About', href: '#' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 dark:border-border/40">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-10">
                    <Link href="/" className="transition-opacity hover:opacity-90">
                        <AppLogo />
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <AppearanceToggleDropdown />

                    <div className="flex items-center gap-2">
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                                        <Avatar className="h-9 w-9 border border-border">
                                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                            <AvatarFallback className="bg-violet-500/10 text-violet-600 dark:text-violet-400">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <UserMenuContent user={auth.user} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="hidden items-center gap-2 md:flex">
                                <Link href={login()}>
                                    <Button variant="ghost" size="sm">Log in</Button>
                                </Link>
                                <Link href={register()}>
                                    <Button size="sm" className="bg-violet-600 text-white hover:bg-violet-700">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* FIXED MOBILE SIDEBAR SECTION */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col p-0"> {/* Removed default padding to control it internally */}
                            <SheetHeader className="p-6 text-left border-b">
                                <SheetTitle>
                                    <AppLogo />
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col flex-1 overflow-y-auto p-6">
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-semibold py-2 transition-colors text-foreground/70 hover:text-foreground"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-6 border-t">
                                    {!auth.user ? (
                                        <div className="flex flex-col gap-3">
                                            <Link href={login()} onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button variant="outline" className="w-full justify-center py-6 text-base">
                                                    Log in
                                                </Button>
                                            </Link>
                                            <Link href={register()} onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button className="w-full justify-center bg-violet-600 py-6 text-base hover:bg-violet-700">
                                                    Get Started
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <Link href={route('dashboard')} onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button className="w-full bg-violet-600 py-6 text-base">
                                                Dashboard
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}