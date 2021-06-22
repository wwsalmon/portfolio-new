import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

export default function SEO({
                                title = "Samson Zhang",
                                description = "The personal website and portfolio of writer, software engineer, and entrepreneur Samson Zhang.",
                                imgUrl = null,
                                authorUsername = null,
                                publishedDate = null,
                                noindex = false,
                            }: { title?: string, description?: string, imgUrl?: string, authorUsername?: string, publishedDate?: string, noindex?: boolean }) {
    const router = useRouter();
    const fullTitle = title + (router.asPath === "/" ? "" : " | Samson Zhang");

    let openGraph = {
        title: fullTitle,
        description: description,
        url: "https://www.samsonzhang.com" + router.asPath,
        images: imgUrl ? [
            { url: imgUrl }
        ] : [
            // { url: "https://questionjournal.vercel.app/defaultImage.png" }
        ],
    };

    let twitter = {
        site: "@wwsalmon",
        cardType: imgUrl ? "summary_large_image" : "summary",
    };

    return (
        <NextSeo
            title={fullTitle}
            description={description}
            openGraph={openGraph}
            twitter={twitter}
            noindex={noindex}
        />
    );
}