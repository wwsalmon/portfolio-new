import Container from "../components/Container";
import HomeItem from "../components/HomeItem";
import UnderlinedLink from "../components/UnderlinedLink";
import SEO from "../components/SEO";
import {currentExperience, pastExperience} from "../utils/experience";
import TwoColContainer from "../components/TwoColContainer";
import TwoColChild from "../components/TwoColChild";
import ItalicHeading from "../components/ItalicHeading";
import {navbarItems} from "../components/Navbar";

export default function Home() {
    return (
        <Container className="mt-16">
            <SEO/>
            <img src="/headshot.jpg" alt="Headshot of Samson Zhang" className="w-40 h-40 rounded-full mb-12 shadow-lg"/>
            <div className="text-4xl leading-snug mb-8"><span>Hi, I'm Samson.<br/>I love building things and telling stories.</span></div>
            <p className="text-xl font-serif text-gray1 my-4" style={{maxWidth: 700}}>
                I’m a Media Studies and Physics major at <UnderlinedLink href="">Pomona College</UnderlinedLink>.
            </p>
            <p className="text-xl font-serif text-gray1 my-4" style={{maxWidth: 700}}>
                I write a lot about <UnderlinedLink href="https://theyappie.com/author/samsonzhang/">AAPI politics</UnderlinedLink>, tech culture, and whatever I'm learning in classes, from books and conversations, or just on my own.
            </p>
            <p className="text-xl font-serif text-gray1 my-4" style={{maxWidth: 700}}>
                I also make a lot of websites and webapps: recently I've been working on <UnderlinedLink href="https://updately.us/">Updately</UnderlinedLink>, <UnderlinedLink href="https://postulate.us/">Postulate</UnderlinedLink>, and various data journalism pieces.
            </p>
            <p className="text-xl font-serif text-gray1 my-4" style={{maxWidth: 700}}>
                If you know me from Twitter it's probably because I was the co-organizer of <UnderlinedLink href="https://twitter.com/JoinEdyfi">Edyfi's</UnderlinedLink> Mill Valley co-living house.
            </p>
            <TwoColContainer>
                <TwoColChild>
                    <ItalicHeading className="mt-24 mb-6">Updates</ItalicHeading>
                    <div className="opacity-90 hover:opacity-100 transition">
                        <iframe
                            src="https://samsonzhang.substack.com/embed"
                            frameBorder={0}
                            className="rounded-t-md"
                            style={{
                                width: "calc(400% / 3)",
                                height: 400,
                                transform: "scale(0.75)",
                                transformOrigin: "top left",
                                marginBottom: -101,
                            }}
                        />
                    </div>
                    <a
                        href="https://samsonzhang.substack.com/p/fall-2021-shipping-log"
                        className="block p-4 text-white rounded-b-md transition z-10 relative"
                        id="home-substack-top"
                    >
                        <p className="uppercase font-bold text-gray2 tracking-wider mt-4 mb-2">Most recent: Fall 2021</p>
                        <h3 className="text-xl leading-normal block mb-4 underline underline-offset-2 font-medium decoration-2 decoration-gray2">
                            Data journalism, Updately updates, and writing about thermodynamics, ideology, and excellence
                        </h3>
                    </a>
                </TwoColChild>
                <TwoColChild>
                    <ItalicHeading className="mb-8 mt-24">Portfolios</ItalicHeading>
                    {navbarItems.map(item => (
                        <a href={item.link} key={item.link} className="inline-block p-6 skeudo mb-6 mr-6 font-code">{item.label}</a>
                    ))}
                </TwoColChild>
            </TwoColContainer>
            <TwoColContainer>
                <TwoColChild>
                    <ItalicHeading className="mb-8 mt-24">Currently</ItalicHeading>
                    {currentExperience.map((item, i) => (
                        <HomeItem item={item} key={`home-currexp-${i}`}/>
                    ))}
                </TwoColChild>
                <TwoColChild>
                    <ItalicHeading className="mb-8 mt-24">Past</ItalicHeading>
                    {pastExperience.map((item, i) => (
                        <HomeItem item={item} key={`home-pastexp-${i}`}/>
                    ))}
                    <UnderlinedLink className="text-gray2" href="/szhang-resume.pdf">Full resume</UnderlinedLink>
                </TwoColChild>
            </TwoColContainer>
        </Container>
    );
}