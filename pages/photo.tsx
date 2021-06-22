import Container from "../components/Container";
import SEO from "../components/SEO";
import photo from "../utils/photo.json";
import PhotoGallery from "../components/PhotoGallery";

export default function Photo() {
    return (
        <Container className="mt-16">
            <SEO title="Photo"/>
            <h1 className="font-bold text-4xl mb-2">Photo</h1>
            <p className="text-gray2 font-serif text-2xl">Snapshots of people and their stories. Portraits, event coverage, documentary photography.</p>
            <PhotoGallery galleryArray={photo}/>
        </Container>
    );
}