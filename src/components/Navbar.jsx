'use client'

import Link from "next/link"
import { ThemeController } from "./ThemeController"
import { links } from "@/utils/links"
import { usePathname } from "next/navigation"

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="navbar bg-base-100 px-10 py-6 flex justify-between items-center">
            <ThemeController />
            <div className="flex gap-x-4">
                <div className="btn">Custom Range</div>

                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`btn ${pathname === link.href ? 'btn-primary' : 'btn-ghost'}`} >
                        {link.label}
                    </Link>
                ))}

            </div>
        </div >
    )
}
