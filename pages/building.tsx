import Container from "../components/Container";
import SEO from "../components/SEO";
import TwoColContainer from "../components/TwoColContainer";
import TwoColChild from "../components/TwoColChild";
import PortfolioSection from "../components/PortfolioSection";
import {CodeItemObj, HomeItemObj} from "../utils/types";
import CodeItem from "../components/CodeItem";
import ExperienceSection from "../components/ExperienceSection";

export default function Building() {
    const packages: CodeItemObj[] = [
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
            description: "10x your learning and writing output by taking public notes. Postulate is a notetaking platform that helps you publish your ideas instead of forgetting them.",
            tags: ["react", "next", "mongodb", "s3"],
            images: ["postulate.jpg"],
            url: "http://postulate.us/",
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
            description: "Log your house, club, or league games and get player rankings and metrics over time. 2-day hackathon build",
            tags: ["react", "next", "postgres", "stripe"],
            images: ["eloleague.jpg"],
            url: "http://eloleague.com/",
        },
        {
            name: "Updately",
            description: "A social platform for daily updates. Built and launched in three days",
            tags: ["react", "next", "mongodb"],
            images: ["updately.png"],
            url: "http://updately.us/",
        },
        {
            name: "Question Journal",
            description: "A notetaking app that helps you answer your biggest questions. Question Journal lets you document your questions and notes about them over time, centering curiosity in your learning.",
            tags: ["react", "next", "mongodb"],
            images: ["questionjournal.png"],
            url: "https://questionjournal.vercel.app/",
        },
        {
            name: "Morse WP Theme",
            description: "A WordPress theme custom-made for small newspapers. Built with versatility, ease of use, and maintainability in mind.",
            tags: ["wordpress", "php", "sass"],
            images: ["morse.jpg"],
            url: "https://github.com/wwsalmon/morse-wp-theme",
        },
    ];

    const experience: HomeItemObj[] = [
        {
            title: "Founder",
            of: true,
            place: "Postulate",
            // description: "My first startup. Selected to interview for YC S‘20",
        },
        {
            title: "Senior PM and SWE",
            place: "StartupTree",
        },
        {
            title: "SWE",
            place: "Cuely.ai, Tadpole Tutoring",
        },
    ];

    return (
        <Container className="mt-16">
            <SEO title="Code & Building"/>
            <h1 className="font-bold text-4xl mb-2">Code & Building</h1>
            <p className="text-gray2 font-serif text-2xl">Fullstack engineering, product, and UI/UX work</p>
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