import Container from "../components/Container";
import SEO from "../components/SEO";
import UnderlinedLink from "../components/UnderlinedLink";

export default function Building() {
    return (
        <Container className="mt-16">
            <SEO title="Code & Building"/>
            <h1 className="font-bold text-4xl mb-2">Code & Building</h1>
            <p className="text-gray2 font-serif text-2xl">Websites, web apps, UI frameworks, mobile apps, physical devices</p>
            <p className="my-12">Coming soon. Check out my <UnderlinedLink href="https://www.samsonzhang.com/building">old portfolio</UnderlinedLink> in the meantime.</p>
        </Container>
    );
}