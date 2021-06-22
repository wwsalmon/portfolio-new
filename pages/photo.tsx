import Container from "../components/Container";
import SEO from "../components/SEO";
import UnderlinedLink from "../components/UnderlinedLink";

export default function Photo() {
    return (
        <Container className="mt-16">
            <SEO title="Photo"/>
            <h1 className="font-bold text-4xl mb-2">Photo</h1>
            <p className="text-gray2 font-serif text-2xl">Snapshots of people and their stories. Portraits, event coverage, documentary photography.</p>
            <p className="my-12">Coming soon. Check out my <UnderlinedLink href="https://www.samsonzhang.com/photo">old portfolio</UnderlinedLink> in the meantime.</p>
        </Container>
    );
}