import Container from "../components/Container";
import Link from "next/link";
import HomeItem from "../components/HomeItem";
import UnderlinedLink from "../components/UnderlinedLink";
import {FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";
import SEO from "../components/SEO";

export default function Home() {
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
        <div className="relative" style={{minHeight: "100vh"}}>
            <SEO/>
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
            <Container className="mt-16">
                <div className="text-4xl leading-snug"><span>Hi, I'm Samson.<br/>I love building things and telling stories.</span></div>
                <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                    I’m a Media Studies and CS major interested in technological innovation, social change (particularly regarding institutional and structural power), and overlaps between them. I’ve worked as a journalist, designer, filmmaker, software engineer, product manager, and entrepreneur. I also love to cook, run, and play piano 😁
                </p>
                <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                    On this website, you’ll find portfolios for my <UnderlinedLink href="/writing">writing</UnderlinedLink>, <UnderlinedLink href="/building">dev/product work</UnderlinedLink>, <UnderlinedLink href="/photo">photography</UnderlinedLink>, and <UnderlinedLink href="/film">filmmaking</UnderlinedLink>. You can check out my latest thoughts + updates on <UnderlinedLink href="https://postulate.us/@samsonzhang">my Postulate blog</UnderlinedLink>, or the questions I’m pondering on my question journal.
                </p>
                <div className="md:flex md:-mx-12">
                    <div className="md:w-1/2 md:mx-12 mt-24">
                        <h3 className="italic font-serif text-xl mb-8">Currently</h3>
                        {[
                            {
                                title: "Founder",
                                of: true,
                                place: "Postulate",
                                description: "My first startup. Selected to interview for YC S‘20",
                            },
                            {
                                title: "Editor",
                                serif: true,
                                place: <i>The Yappie</i>,
                                description: "The only independent publication dedicated to AAPI politics and power. Read by members of Congress, the White House, and leading advocacy organizations.",
                            },
                            {
                                title: "Organizer",
                                place: "Edyfi",
                                description: "A network of micro-campuses for ambitious, brilliant 18-23yos outside of traditional institutions. Was a founding participant + S‘21 organizer",
                            },
                            {
                                title: "B.A. Media Studies",
                                serif: true,
                                place: "Pomona College",
                            },
                        ].map(item => (
                            <HomeItem item={item}/>
                        ))}
                    </div>
                    <div className="md:w-1/2 md:mx-12 mt-24">
                        <h3 className="italic font-serif text-xl mb-8">Past</h3>
                        {[
                            {
                                title: "Senior PM and SWE",
                                place: "StartupTree",
                            },
                            {
                                title: "SWE",
                                place: "Cuely.ai, Tadpole Tutoring",
                            },
                            {
                                title: "Critical Writing Assoc. Editor, Critic & Columnist, Film & Spoken Word Director",
                                place: <i>The Incandescent Review</i>,
                                serif: true,
                            },
                            {
                                title: "Executive Digital Editor, Video Section Assoc. Editor",
                                place: <i>The Phillipian</i>,
                                serif: true,
                            },
                        ].map(item => (
                            <HomeItem item={item}/>
                        ))}
                    </div>
                </div>
            </Container>
            <div className="h-24 invisible"/>
            <div className="w-full h-20 absolute bottom-0" style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)"}}/>
        </div>
    );
}