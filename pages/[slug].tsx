import {GetServerSideProps} from "next";
import {ssr404} from "next-response-helpers";
import films from "../utils/film.json";
import {FilmObj} from "./film";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";
import YTEmbed from "../components/YTEmbed";
import ItalicHeading from "../components/ItalicHeading";
import FilmItem from "../components/FilmItem";

export const Divider = () => (
    <div className="w-12 h-1 bg-black my-10"/>
)

export default function FilmPage({item}: {item: FilmObj}) {
    return (
        <Container className="mt-16">
            <SEO title={item.title}/>
            <div className="flex flex-col items-center">
                <Link href="/film">
                    <a className="flex items-center font-bold">
                        <FiArrowLeft/>
                        <span className="ml-2">Back to film projects</span>
                    </a>
                </Link>
                <Divider/>
                <h1 className="text-4xl font-bold text-center mb-8">{item.title}</h1>
                <p className="text-center text-2xl max-w-2xl leading-normal">{item.descript}</p>
            </div>
            <YTEmbed ytid={item.ytid} className="my-12"/>
            <Divider/>
            <ItalicHeading className="mb-8">Highlights</ItalicHeading>
            <div className="grid gap-6 md:grid-cols-2">
                {item.images.map((image, i) => (
                    <div key={item.slug + "image" + i}>
                        {image.substr(image.length - 3) === "mp4" ? (
                            <video autoPlay loop muted className="w-full">
                                <source src={`/portfolio-film/${item.slug}/${image}`} type="video/mp4"/>
                            </video>
                        ) : (
                            <img src={`/portfolio-film/${item.slug}/${image}`} alt="" className="w-full"/>
                        )}
                    </div>
                ))}
            </div>
            <Divider/>
            <ItalicHeading className="mb-8">Other projects</ItalicHeading>
            <div className="grid gap-12 md:grid-cols-2">
                {(films as FilmObj[]).filter(d => d.slug !== item.slug).map(film => (
                    <FilmItem item={film} key={film.slug}/>
                ))}
            </div>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (Array.isArray(context.params.slug)) return ssr404;

    if (films.findIndex(d => d.slug === context.params.slug) < 0) return ssr404;

    return {props: {item: films.find(d => d.slug === context.params.slug)}};
}