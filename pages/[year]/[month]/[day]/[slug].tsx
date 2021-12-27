import {GetStaticPaths, GetStaticProps} from "next";

export interface BlogPostProps {title: string, date: string, tags: string[], body: string, filename: string};

export const getStaticPaths: GetStaticPaths = () => {
    const fs = require("fs");
    const files = fs.readdirSync(process.cwd() + "/posts/");

    const paths = files.map(file => ({
        params: {year: file.substr(0, 4), month: file.substr(5, 2), day: file.substr(8, 2), slug: file.substr(11, file.length - 14)}
    }));

    console.log(paths[4]);

    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = ({params}) => {
    const filename = `${params.year}-${params.month}-${params.day}-${params.slug}.md`;

    const fs = require("fs");
    const fm = require("front-matter");
    const thisFile = fs.readFileSync(process.cwd() + "/posts/" + filename);
    const thisFm = fm(thisFile.toString());

    return {
        props: {
            title: thisFm.attributes.title,
            date: thisFm.attributes.date,
            tags: thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [],
            body: thisFm.body,
            filename: filename,
        }
    };
}

export default function BlogPost({title, date, tags, body}: BlogPostProps) {
    return (
        <div>
            <h2 className="font-bold text-2xl">{title}</h2>
        </div>
    )
}