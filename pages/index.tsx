import Container from "../components/Container";
import HomeItem from "../components/HomeItem";
import UnderlinedLink from "../components/UnderlinedLink";
import SEO from "../components/SEO";
import {currentExperience, pastExperience} from "../utils/experience";
import TwoColContainer from "../components/TwoColContainer";
import TwoColChild from "../components/TwoColChild";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <Container className="mt-16">
            <SEO/>
            <img src="/headshot.jpg" alt="Headshot of Samson Zhang" className="w-40 h-40 rounded-full mb-12 shadow-lg"/>
            <div className="text-4xl leading-snug"><span>Hi, I'm Samson.<br/>I love building things and telling stories.</span></div>
            <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                I’m a Media Studies and CS major interested in technological innovation, social change, and relationships between the two. I’ve worked as a journalist, designer, filmmaker, software engineer, product manager, and entrepreneur. I also love to cook, run, and play piano 😁
            </p>
            <p className="text-xl font-serif text-gray1 my-8" style={{maxWidth: 700}}>
                On this website, you’ll find portfolios for my <UnderlinedLink href="/writing">writing</UnderlinedLink>, <UnderlinedLink href="/building">engineering/product management</UnderlinedLink>, <UnderlinedLink href="/design">design</UnderlinedLink>, <UnderlinedLink href="/photo">photography</UnderlinedLink>, and <UnderlinedLink href="/film">filmmaking</UnderlinedLink>. You can check out my latest thoughts + updates on <UnderlinedLink href="https://postulate.us/@samsonzhang">my Postulate blog</UnderlinedLink>, or the questions I’m pondering on my question journal.
            </p>
            <TwoColContainer>
                <TwoColChild>
                    <h3 className="italic font-serif text-xl mb-8 mt-24">Currently</h3>
                    {currentExperience.map(item => (
                        <HomeItem item={item}/>
                    ))}
                </TwoColChild>
                <TwoColChild>
                    <h3 className="italic font-serif text-xl mb-8 mt-24">Past</h3>
                    {pastExperience.map(item => (
                        <HomeItem item={item}/>
                    ))}
                    <UnderlinedLink className="text-gray2" href="/szhang-resume.pdf">Full resume</UnderlinedLink>
                </TwoColChild>
            </TwoColContainer>
        </Container>
    );
}