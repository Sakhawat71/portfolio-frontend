"use client";

import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';

const NavbarSelector = () => {
    const path = usePathname();
    return path === "/" ? <Navbar /> : <MainNavbar />;
};

export default NavbarSelector;