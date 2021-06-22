import Container from "../components/Container";
import SEO from "../components/SEO";
import UnderlinedLink from "../components/UnderlinedLink";

export default function Film() {
    return (
        <Container className="mt-16">
            <SEO title="Film"/>
            <h1 className="font-bold text-4xl mb-2">Film</h1>
            <p className="text-gray2 font-serif text-2xl">Cinematography, direction, editing, motion graphics, across narrative, documentary, promotional, and other forms of filmmaking.</p>
            <p className="my-12">Coming soon. Check out my <UnderlinedLink href="https://www.samsonzhang.com/film">old portfolio</UnderlinedLink> in the meantime.</p>
        </Container>
    );
}