import Container from "../components/Container";
import SEO from "../components/SEO";
import design from "../utils/design.json";
import PhotoGallery from "../components/PhotoGallery";
import H1 from "../components/H1";
import Subheading from "../components/Subheading";

export default function Design() {
    return (
        <Container className="mt-16">
            <SEO title="Design"/>
            <H1>Design</H1>
            <Subheading>Editorial, branding, interface, ads, motion graphics</Subheading>
            <PhotoGallery galleryArray={design} isDesign={true}/>
        </Container>
    );
}