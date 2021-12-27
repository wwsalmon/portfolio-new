import Container from "../components/Container";
import SEO from "../components/SEO";
import photo from "../utils/photo.json";
import PhotoGallery from "../components/PhotoGallery";
import H1 from "../components/H1";
import Subheading from "../components/Subheading";

export default function Photo() {
    return (
        <Container className="mt-16">
            <SEO title="Photo"/>
            <H1>Photo</H1>
            <Subheading>Photojournalism, portraits, events</Subheading>
            <PhotoGallery galleryArray={photo}/>
        </Container>
    );
}