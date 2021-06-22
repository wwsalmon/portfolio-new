import Container from "./Container";
import Link from "next/link";
import {FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    const navbarItems = [
        {
            label: "Writing",
            link: "/writing",
        },
        {
            label: "Code & Building",
            link: "/writing",
        },
        {
            label: "Photo",
            link: "/writing",
        },
        {
            label: "Film",
            link: "/writing",
        },
        {
            label: "Blog",
            link: "/blog",
        },
    ];

    return (
        <>
            <div className="w-full h-20 fixed top-0" style={{background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)"}}/>
            <div className="h-16 w-full invisible"/>
            <div className="w-full sticky top-4">
                <Container>
                    <div className="flex items-center pb-4">
                        <Link href="/">
                            <a className="font-display text-4xl">
                                sz.
                            </a>
                        </Link>
                        <div className="ml-auto items-center hidden sm:flex">
                            {navbarItems.map(item => (
                                <Link href={item.link}>
                                    <a className="ml-8 text-lg text-gray1">{item.label}</a>
                                </Link>
                            ))}
                        </div>
                        <button className="ml-auto sm:hidden text-xl text-gray1" onClick={() => setNavbarOpen(true)}>
                            <FiMenu/>
                        </button>
                    </div>
                </Container>
            </div>
            <div className={"fixed top-0 bottom-0 right-0 w-72 p-6 bg-white z-10 shadow " + (navbarOpen ? "" : "-right-80")} style={{transition: "all 0.2s ease"}}>
                <div className="flex">
                    <button className="text-xl text-gray-1 ml-auto" onClick={() => setNavbarOpen(false)}>
                        <FiX/>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-end h-full">
                    <Link href="/">
                        <a className="text-lg my-4 text-gray1">Home</a>
                    </Link>
                    {navbarItems.map(item => (
                        <Link href={item.link}>
                            <a className="text-lg my-4 text-gray1">{item.label}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}