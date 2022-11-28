import React from 'react';
import Container from "@/Layouts/Container";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import {usePage} from "@inertiajs/inertia-react";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Navbar() {
    const {auth} = usePage().props;
    return (
        <nav className="bg-white border-b py-2">
           <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo/>
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/layanan">Layanan</NavLink>
                        <NavLink href="/payment">Cek Pembayaran</NavLink>
                        {auth.user ?
                            <>
                                <DropdownMenu label={auth.user.name}>
                                    <DropdownMenu.Link href="/">Home</DropdownMenu.Link>
                                    <DropdownMenu.Link href={route('routers.index')}>Routers</DropdownMenu.Link>
                                    <DropdownMenu.Link href="/dashboard">Dashboard</DropdownMenu.Link>
                                    <DropdownMenu.Link as={'button'} method="post" href="/logout">Logout</DropdownMenu.Link>
                                </DropdownMenu>
                            </>
                            :
                            <>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        }
                    </div>
                </div>
           </Container>
        </nav>
    );
}

