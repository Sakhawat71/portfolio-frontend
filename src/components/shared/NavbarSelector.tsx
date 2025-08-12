"use client";

import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';

const NavbarSelector = () => {
    const path = usePathname();
    const isHome = path === '/';
    if (isHome) return <Navbar />;
    else return <MainNavbar />
};

export default NavbarSelector;