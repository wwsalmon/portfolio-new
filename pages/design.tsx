import Container from "../components/Container";
import SEO from "../components/SEO";
import UnderlinedLink from "../components/UnderlinedLink";

export default function Design() {
    return (
        <Container className="mt-16">
            <SEO title="Design"/>
            <h1 className="font-bold text-4xl mb-2">Design</h1>
            <p className="text-gray2 font-serif text-2xl">Editorial, branding, interface, ads, motion graphics</p>
            <p className="my-12">Coming soon. Check out my <UnderlinedLink href="https://www.samsonzhang.com/design">old portfolio</UnderlinedLink> in the meantime.</p>
        </Container>
    );
}