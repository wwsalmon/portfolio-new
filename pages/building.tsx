import Container from "../components/Container";
import SEO from "../components/SEO";
import TwoColContainer from "../components/TwoColContainer";
import TwoColChild from "../components/TwoColChild";
import PortfolioSection from "../components/PortfolioSection";
import {CodeItemObj, HomeItemObj} from "../utils/types";
import CodeItem from "../components/CodeItem";
import ExperienceSection from "../components/ExperienceSection";
import H1 from "../components/H1";
import Subheading from "../components/Subheading";

export default function Building() {
    const packages: CodeItemObj[] = [
        {
            name: "next-response-helpers",
            description: "Helper functions to make NextJS API and SSR responses less verbose",
            tags: ["next", "npm"],
            url: "https://www.npmjs.com/package/next-response-helpers",
        },
        {
            name: "react-controlled-component-helpers",
            description: "Helper functions to make React controlled components less verbose",
            tags: ["react", "npm"],
            url: "https://www.npmjs.com/package/react-controlled-component-helpers",
        },
        {
            name: "react-robust-accordion",
            description: "Accessible, animated accordion component for React, published on npm",
            tags: ["react", "npm", "css"],
            url: "https://www.npmjs.com/package/react-robust-accordion",
        },
        {
            name: "next-tailwind-typescript-example",
            description: "Template to set up Next, Tailwind, and Typescript in one npx command",
            tags: ["next", "typescript"],
            url: "https://github.com/wwsalmon/next-tailwind-typescript-example",
        },
        {
            name: "next-mongodb-nextauth-example",
            description: "Template to set up Next, Tailwind, Typescript, MongoDB, and NextAuth in one npx command",
            tags: ["next", "typescript", "mongodb"],
            url: "https://github.com/wwsalmon/next-mongodb-nextauth-example",
        },
    ];

    const openSource: CodeItemObj[] = [
        {
            name: "next-auth",
            description: "Authentication library for Next",
            tags: ["next"],
            url: "https://github.com/nextauthjs/next-auth",
        },
        {
            name: "remark-slate",
            description: "Remark plugin to convert markdown to Slate editor-compatible schema",
            tags: ["js", "node"],
            url: "https://github.com/hanford/remark-slate",
        },
    ];

    const projects: CodeItemObj[] = [
        {
            name: "Postulate",
            description: "GitHub for knowledge: a notetaking app for sharing your thoughts, learning, and work with the world.",
            tags: ["react", "next", "mongodb", "s3"],
            images: ["postulate.jpg"],
            url: "https://postulate.us/",
        },
        {
            name: "Updately",
            description: "A social platform for daily updates. Originally built and launched in three days",
            tags: ["react", "next", "mongodb"],
            images: ["updately.png"],
            url: "https://updately.us/",
        },
        {
            name: "TSL COVID Tracker",
            description: <>A central dashboard for COVID information across the five Claremont Colleges, built for <i>The Student Life</i></>,
            tags: ["react", "next"],
            images: ["covid.png"],
            url: "https://covid.tsl.news/",
        },
        {
            name: "Visualizing Pomona's 2025 Admissions",
            description: <>Data visualization piece "Diversity takes a dip in Pomona’s Class of 2025" for <i>The Student Life</i></>,
            tags: ["react", "idyll", "d3"],
            images: ["datavis.gif"],
            url: "https://tsl.news/pomona-class-of-2025-diversity/",
        },
        {
            name: "sota.js",
            description: <>An easy-to-use, beautiful, d3.js-based charting library. Built for <i>The Phillipian's</i> State of the Academy 2020 survey</>,
            tags: ["d3", "npm"],
            images: ["sota.jpg"],
            url: "https://github.com/wwsalmon/sota.js",
        },
        {
            name: "EloLeague",
            description: "Log your house, club, or league games and get player rankings and metrics over time. 2-day hackathon build. (Since shut down)",
            tags: ["react", "next", "postgres", "stripe"],
            images: ["eloleague.jpg"],
            url: "/",
        },
        {
            name: "YouTube Liberation",
            description: "Chrome extension to liberate you from the infinite distraction cycle of YouTube.",
            tags: ["js", "chrome extension"],
            images: ["ytl.jpg"],
            url: "https://chrome.google.com/webstore/detail/youtube-liberation-anti-d/akmmhbokbfhghenajahbcmogcbghiamg",
        },
        {
            name: "Auto Turner",
            description: "A mechanical page turner for musicians. The final result of Cooper Union's 6 week product design and prototyping Makerspace class in the Summer STEM 2018 program.",
            tags: ["3d printing", "laser cutting"],
            images: ["autoturner.gif"],
            url: "https://www.youtube.com/watch?v=c5Udwl8OnfE",
        },
        {
            name: "DIY Motorized Camera Gimbal",
            description: "Building a motorized 3-axis gimbal to stabilize cameras for filmmaking using 3D printing and laser cutting.",
            tags: ["3d printing", "laser cutting", "microcontrollers"],
            images: ["gimbal.gif"],
            url: "https://www.youtube.com/watch?v=bW62-upWoQY",
        },
        {
            name: "Small Form Factor Ryzen PC Build",
            description: "A custom PC the size of a shoebox, but with a Ryzen R5 2600 and GTX 1060 for twice the power of my old build.",
            tags: ["pc build"],
            images: ["sff.jpg"],
            url: "https://www.youtube.com/watch?v=IWN766R4YTI",
        },
        {
            name: "Question Journal",
            description: "A notetaking app that helps you answer your biggest questions. Question Journal lets you document your questions and notes about them over time, centering curiosity in your learning.",
            tags: ["react", "next", "mongodb"],
            images: ["questionjournal.png"],
            url: "https://questionjournal.vercel.app/",
        },
        {
            name: "The Phillipian",
            description: "Rebuilt Phillips Academy's student publication's WordPress site template from scratch, supporting over 15,000 historical articles and 80-100 new ones uploaded each week, along with multimedia content.",
            tags: ["wordpress", "php"],
            images: ["phillipian.png"],
            url: "https://phillipian.net/",
        },
        {
            name: "Morse WP Theme",
            description: "A WordPress theme custom-made for small newspapers. Built with versatility, ease of use, and maintainability in mind.",
            tags: ["wordpress", "php", "sass"],
            images: ["morse.jpg"],
            url: "https://github.com/wwsalmon/morse-wp-theme",
        }
    ];

    const experience: HomeItemObj[] = [
        {
            title: "Founder",
            of: true,
            place: "Postulate",
            url: "http://postulate.us/",
        },
        {
            title: "Senior PM and SWE",
            place: "StartupTree",
            url: "http://startuptree.co/",
        },
        {
            title: "SWE",
            place: "Cuely.ai, Tadpole Tutoring",
        },
    ];

    return (
        <Container className="mt-16">
            <SEO title="Code & Building"/>
            <H1>Code & Building</H1>
            <Subheading>Fullstack engineering, product, and UI/UX work...and some hardware if you scroll down enough</Subheading>
            <TwoColContainer>
                <TwoColChild>
                    <PortfolioSection heading="Projects">
                        {projects.map((item, i) => (
                            <>
                                {i !== 0 && <hr className="text-gray4 my-12"/>}
                                <CodeItem item={item}/>
                            </>
                        ))}
                    </PortfolioSection>
                </TwoColChild>
                <TwoColChild>
                    <ExperienceSection experience={experience}/>
                    <PortfolioSection heading="Packages">
                        {packages.map(item => <CodeItem item={item}/>)}
                    </PortfolioSection>
                    <PortfolioSection heading="Open Source Contributions">
                        {openSource.map(item => <CodeItem item={item}/>)}
                    </PortfolioSection>
                </TwoColChild>
            </TwoColContainer>
        </Container>
    );
}