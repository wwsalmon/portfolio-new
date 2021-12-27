import Container from "../components/Container";
import SEO from "../components/SEO";
import YTEmbed from "../components/YTEmbed";
import films from "../utils/film.json";
import FilmItem from "../components/FilmItem";
import H1 from "../components/H1";
import Subheading from "../components/Subheading";

export interface FilmObj {
    slug: string,
    title: string,
    ytid: string,
    descript: string,
    images: string[],
}

export default function Film() {
    return (
        <Container className="mt-16">
            <SEO title="Film"/>
            <H1>Film</H1>
            <Subheading>
                I'm handy with a camera and editing software. Not doing too much film/video stuff right now but here's a portfolio of my past work.
            </Subheading>
            <YTEmbed ytid="CM5prTlxyUI" className="my-12"/>
            <div className="grid gap-12 md:grid-cols-2">
                {(films as FilmObj[]).map(film => (
                    <FilmItem item={film} key={film.slug}/>
                ))}
            </div>
        </Container>
    );
}