import Container from "../components/Container";
import HomeItem from "../components/HomeItem";
import UnderlinedLink from "../components/UnderlinedLink";
import SEO from "../components/SEO";

export default function Home() {
    return (
        <Container className="mt-16">
            <SEO/>
            <img src="/headshot.jpg" alt="Headshot of Samson Zhang" className="w-40 h-40 rounded-full mb-12 shadow-lg"/>
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
    );
}