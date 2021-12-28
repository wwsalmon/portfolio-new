import {GetStaticProps} from "next";
import {BlogPostProps} from "../[year]/[month]/[day]/[slug]";
import Container from "../../components/Container";
import BlogItem, {getDateFromBlogPostProps} from "../../components/BlogItem";
import SEO from "../../components/SEO";
import H1 from "../../components/H1";
import Subheading from "../../components/Subheading";
import BlogTag from "../../components/BlogTag";
import Masonry from "react-masonry-component";

export const getStaticProps: GetStaticProps = () => {
    const fs = require("fs");
    const fm = require("front-matter");
    const files = fs.readdirSync(process.cwd() + "/posts/");
    const posts = files.map(file => {
        const thisFile = fs.readFileSync(process.cwd() + "/posts/" + file);
        const thisFm = fm(thisFile.toString());
        return {
            title: thisFm.attributes.title,
            date: thisFm.attributes.date,
            tags: thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [],
            body: thisFm.body,
            filename: file,
        }
    })

    return {props: {posts: JSON.parse(JSON.stringify(posts))}};
}

export default function Blog({posts}: {posts: BlogPostProps[]}) {
    const tags = posts.reduce((a, b) => [...a, ...b.tags], []).filter((d, i, a) => a.findIndex(x => x === d) === i);

    return (
        <Container className="mt-16">
            <SEO title="Blog"/>
            <H1>Blog</H1>
            <Subheading>A place for me to dump my thoughts — posts about tech, innovation, culture, and social change, along with personal essays and creative pieces</Subheading>
            <div className="my-12">
                {tags.map(tag => <BlogTag tag={tag} count={posts.filter(d => d.tags.includes(tag)).length}/>)}
            </div>
            <Masonry className="mt-20 -mx-8">
                {posts.sort((a, b) => +getDateFromBlogPostProps(b) - +getDateFromBlogPostProps(a)).map(post => (
                    <BlogItem post={post} key={post.title}/>
                ))}
            </Masonry>
        </Container>
    )
}