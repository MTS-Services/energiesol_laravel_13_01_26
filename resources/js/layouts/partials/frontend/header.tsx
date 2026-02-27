import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import { login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Menu, XIcon } from 'lucide-react';
import { useState } from 'react';

export function FrontendHeader() {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();

    console.log(url );
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: route('home'), slug: '/' },
        { name: 'Service', href: route('service'), slug: '/service' },
        { name: 'Vorteile', href: route('advantage'), slug: '/advantage' },
        { name: 'Geschichte', href: route('about'), slug: '/about-us' },
        { name: 'Kontakt', href: route('contact'), slug: '/contact' },
        { name: 'Unsere Produkte', href: route('products'), slug: '/products' },
    ];

    return (
        <header className="bg-linear-t-b fixed top-0 z-50 w-full bg-black/10 from-white/80 to-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-30 items-center justify-between px-4 md:px-8">
            {/* <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8"> */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="">
                        <AppLogo />
                    </Link>
                </div>
                {navLinks && (
                    <div className="hidden lg:block">
                        <ul className="flex justify-between gap-7">
                            {navLinks &&
                                navLinks.map((link) => (
                                    <li>
                                        <Link
                                            href={link.href}
                                            className={`font-open-sans text-sm font-normal text-secondary hover:text-hover md:text-base ${url == link.slug ? 'text-hover!' : 'text-secondary'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    {/* <AppearanceToggleDropdown /> */}

                    {/* <div className="hidden h-6 w-[1px] bg-border md:block" /> Divider */}

                    {/* {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-9 w-9 rounded-full  ">
                                    
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
                                    Konfigurator
                                </Button>
                            </Link>
                        </div>
                    )} */}

                    <div className="hidden items-center gap-2 lg:flex">
                        <Link
                            href={route('configurator')}
                            className="rounded-full!"
                        >
                            <Button
                                size="sm"
                                className="rounded-full! bg-btn-primary py-5.5!"
                            >
                                <Icon
                                    iconNode={ArrowRight}
                                    variant="circle"
                                    className="h-4! w-4! rounded-full bg-primary p-4 text-btn-primary"
                                />
                               Angebot erstellen
                            </Button>
                        </Link>
                    </div>
                    {/* Mobile Menu Trigger */}
                    <Sheet
                        open={isMobileMenuOpen}
                        onOpenChange={setIsMobileMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="flex w-full flex-col p-0 sm:max-w-sm"
                        >
                            <SheetHeader className="flex-row items-center justify-between space-y-0 border-b p-6   bg-black/10 from-white/80 to-white/80 backdrop-blur-sm">
                                <AppLogo />
                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <XIcon className="h-5 w-5" />
                                    </Button>
                                </SheetClose>
                            </SheetHeader>

                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="space-y-3">
                                    
                                        <div>
                                            <Link
                                                href={route('admin.dashboard')}
                                                className="block w-full"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                              
                                            </Link>
                                            <ul className="mt-3 flex flex-col justify-between gap-2">
                                                {navLinks &&
                                                    navLinks.map((link) => (
                                                        <li>
                                                            <Link
                                                                href={link.href}
                                                               className={`font-open-sans text-sm font-normal text-secondary hover:text-btn-primary lg:text-base  ${url == link.slug || url == (link.slug + '#contact') ? ' text-btn-primary!' : 'text-secondary'}`}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
