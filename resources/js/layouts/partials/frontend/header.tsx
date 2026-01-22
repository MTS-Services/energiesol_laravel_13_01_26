import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Menu, XIcon } from 'lucide-react';
import { useState } from 'react';
import AppLogo from '@/components/app-logo';
import { UserMenuContent } from '@/components/user-menu-content';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Icon } from '@/components/ui/icon';

export function FrontendHeader() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: route('home') },
        { name: 'Services', href: route('service') },
        { name: 'Advantage', href: route('advantage') },
        { name: 'About', href: route('about') },
        { name: 'Contact', href: route('contact') },
        { name: 'Our Products', href: route('products') },
    ];

    return (
        <header className="fixed bg-linear-t-b from-white/80 to-white/80 top-0 z-50 w-full bg-white/15">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="transition-transform active:scale-95">
                        <AppLogo />
                    </Link>
                </div>
                {navLinks && (

                    <div className='hidden md:block'>
                        <ul className='flex justify-between gap-7'>
                            {navLinks && navLinks.map((link) => (
                                <li><Link href={link.href} className="text-sm md:text-base text-secondayr hover:text-btn-primary font-open-sans font-normal ">{link.name}</Link></li>
                            ))
                            }
                        </ul>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    {/* <AppearanceToggleDropdown /> */}

                    {/* <div className="hidden h-6 w-[1px] bg-border md:block" /> Divider */}

                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-offset-background transition-all hover:ring-2 hover:ring-ring">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                        <AvatarFallback className="bg-violet-600 text-white text-xs">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="hidden items-center gap-2 md:flex">
                            <Link href={login()}>
                                <Button variant="ghost" size="sm" className="text-sm font-medium">Log in</Button>
                            </Link>
                            <Link href={route('configurator')} className='rounded-full!'>
                                <Button size="sm" className="bg-btn-primary rounded-full! py-5!">
                                    <Icon iconNode={ArrowRight} variant="circle" className='w-4! h-4! bg-primary p-3 rounded-full text-btn-primary'/>
                                    Configurator
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Trigger */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-sm">
                            <SheetHeader className="flex-row items-center justify-between border-b p-6 space-y-0">
                                <AppLogo />
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <XIcon className="h-5 w-5" />
                                    </Button>
                                </SheetClose>
                            </SheetHeader>

                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="space-y-3">
                                    {!auth.user ? (
                                        <>
                                            <Link href={login()} className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button variant="outline" className="w-full py-6">Log in</Button>
                                            </Link>
                                            <Link href={register()} className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button className="w-full bg-violet-600 py-6 hover:bg-violet-700">Get Started</Button>
                                            </Link>
                                        </>
                                    ) : (
                                        <Link href={route('admin.dashboard')} className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button className="w-full bg-violet-600 py-6">Dashboard</Button>
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