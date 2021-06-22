import Container from "../components/Container";
import Link from "next/link";
import HomeItem from "../components/HomeItem";
import UnderlinedLink from "../components/UnderlinedLink";

export default function Home() {
    return (
        <div className="relative" style={{minHeight: "100vh"}}>
            <div className="w-full h-20 fixed top-0" style={{background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)"}}/>
            <div className="h-16 w-full invisible"/>
            <div className="w-full sticky top-4">
                <Container>
                    <div className="flex items-center pb-4">
                        <div className="font-display text-4xl"><span>sz.</span></div>
                        <div className="ml-auto flex items-center">
                            {[
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
                            ].map(item => (
                                <Link href={item.link}>
                                    <a className="ml-8 text-lg text-gray1">{item.label}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="mt-16">
                <div className="text-4xl leading-snug"><span>Hi, I'm Samson.<br/>I love building things and telling stories.</span></div>
                <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                    I’m a Media Studies and CS major interested in technological innovation, social change (particularly regarding institutional and structural power), and overlaps between them. I’ve worked as a journalist, designer, filmmaker, software engineer, product manager, and entrepreneur. I also love to cook, run, and play piano 😁
                </p>
                <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                    On this website, you’ll find portfolios for my <UnderlinedLink href="/writing">writing</UnderlinedLink>, <UnderlinedLink href="/building">dev/product work</UnderlinedLink>, <UnderlinedLink href="/photo">photography</UnderlinedLink>, and <UnderlinedLink href="/film">filmmaking</UnderlinedLink>. You can check out my latest thoughts + updates on <UnderlinedLink href="https://postulate.us/@samsonzhang">my Postulate blog</UnderlinedLink>, or the questions I’m pondering on my question journal.
                </p>
                <div className="mt-24 flex -mx-12">
                    <div className="w-1/2 mx-12">
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
                    <div className="w-1/2 mx-12">
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