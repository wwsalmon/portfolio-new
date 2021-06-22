import Container from "../components/Container";
import SEO from "../components/SEO";
import design from "../utils/design.json";
import PhotoGallery from "../components/PhotoGallery";

export default function Design() {
    return (
        <Container className="mt-16">
            <SEO title="Design"/>
            <h1 className="font-bold text-4xl mb-2">Design</h1>
            <p className="text-gray2 font-serif text-2xl">Editorial, branding, interface, ads, motion graphics</p>
            <PhotoGallery galleryArray={design} isDesign={true}/>
        </Container>
    );
}