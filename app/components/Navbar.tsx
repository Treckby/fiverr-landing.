"use client";

import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const links = [
    {
        name: "Servicios",
        href: "#services",
    },
    {
        name: "Beneficios",
        href: "#features",
    },
    {
        name: "Testimonios",
        href: "#testimonials",
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <Container>
                <nav className="flex h-20 items-center justify-between">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="text-2xl font-black tracking-tight text-slate-900"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                                D
                            </div>

                            <div>
                                <h2 className="text-lg font-extrabold text-slate-900">
                                    DevStudio
                                </h2>

                                <p className="-mt-1 text-xs text-slate-500">
                                    Web Solutions
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Menu */}

                    <ul className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="font-medium text-slate-600 transition hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}

                    <Button href="#contact">
                        Contactar
                    </Button>

                </nav>
            </Container>
        </header>
    );
}