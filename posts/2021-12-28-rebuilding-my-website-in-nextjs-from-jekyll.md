---
title: Rebuilding my personal website and blog in NextJS (from Jekyll)
tags: code meta
---

![New website design](/blog/2021-12/new.png)

The latest version of my website served me well. It came together over the course of a month as a combination of smaller projects: an experimental photography/design portfolio to start (with the same masonry layout live on the [photo](/photo) and [design](/design) pages today), then the word cloud on the homepage, then the video portfolio with the hover-to-reveal-slides effect lifted from a separate video portfolio I had built, and finally a blog built around Jekyll's markdown-based blogging engine.

![Old website design](/blog/2021-12/old.png)

Over time I added new components to the website: a page for my code and makerspace projects, a list of newsletters on the front page. My website design was flexible enough to keep adding to it and tweaking it, but a major problem arose: the site was built in Jekyll using Liquid templating, while all my other dev work was done in Javascript and React. As I became more proficient and found better tooling for building whatever I could imagine on the web with React, Jekyll became comparatively more and more of a hassle to use, to the point where I eventually stopped updating my old website entirely. It sat and prominently advertised an outdated description of me, my interests, and my work.

![Old website having incorrect information](/blog/2021-12/old-wrong.png)

I've wanted to rebuild my website for a while. Specifically, I wanted to rebuild it in NextJS. My website has always been grounds for experimentation, where I pushed my personal boundaries of what I could build visually, often transferring my discoveries to other projects. With the Jekyll-React divide in my work, this stopped being the case; rebuilding my website in NextJS would put it on the same stack as the biggest projects I was working on and make code even directly transferrable -- if I implemented blog post recommendations on a NextJS-based personal blog, for example, I could transfer them over to Postulate much more easily than from a Jekyll-based blog.

Over the summer, I hacked together a new portfolio for a fellowship application; I replicated the photo and design pages on my old portfolio fairly easily, and built new writing and software sections that simply linked to external project pages.

This past week, I finally got around to brushing up the info presented and completing the website, bringing over my old Jekyll blog, film portfolio, and project pages. With React tooling, doing so was a breeze.

The site freshens up the styling overall, introducing some serifs and tone and size variation, while preserving a lot of the old designs I still quite like. It's not as playful as it was before and not as lively as I would like it to be, but it's a good starting point to build on in the next few months or years.

For the sake of leaving a record of this mini-project, here are a few technical highlights.

##  The stack: NextJS + Tailwind, hosted on Vercel

As mentioned previously, I use NextJS for all of my from-scratch web dev projects these days. It's stupidly versatile, allowing you to build a full-stack application as easily as a static web app.

Next automatically turns your React code into static files to serve when possible. (Server-side rendering and client-side hydration are also effortless.) That means that this website, developed in React, would be just as performant and SEO-friendly as my old one.

Next also offers a ton of developer experience goodies. Routing is handled automatically simply by creating folders and files with the same names as you want your URLs to have. For example, a component in `/pages/project/autoturner.tsx` will turn into a page at `samsonzhang.com/project/autoturner`, wrapped in the special template files `_app.tsx` and `_document.html`. This routing is not just convenient but also very powerful; in a later section I'll discuss how I replicated Jekyll's blogging engine using `getStaticPaths` in Next.

Other than these goodies, Next is good old React: functional components, npm packages, and Tailwind for styling handle perfectly.

##  Replacing Jekyll data/Liquid templating with JSX

Jekyll had a nice feature where, if you put a json, csv, or yaml file in a `_data` folder, you could reference the dataset as `site.collection.[filename]` in Liquid templating (a templating language similar to Django's) and loop through it.

For my photo portfolio page, for example, I had the following CSV file with the filename and relevant info of every photo I wanted to display:

```csv
name,date,caption
xc1,November 2019,Springbok Gazelle Cross Country Race 2019
arno1,June 2019,Phillips Academy Prom 2019
css1,2017,Columbia Secondary School middle school graduation/stepping up ceremony 2017
sw-6,Summer 2018,Antelope Canyon
march7,Winter 2019,March for Our Lives in Boston.
march6,Winter 2019,March for Our Lives in Boston.
march1,Winter 2019,March for Our Lives in Boston.
march10,Winter 2019,March for Our Lives in Boston.
...
```

Then, in an include, I could write the following:

```html
{% for photo in include.data %}
{% assign name = photo.name | split: "." %}
<div class='photo'>
	{% if name.last == 'mp4' %}
	<video class='portfolio-item' id='{{ name[0] }}' autoplay loop muted>
	    <source src='{{ site.baseurl }}/img/{{ include.folder }}/{{ include.data }}' type='video/mp4'>
	</video>
	{% else %}
	<img class='portfolio-item' id='{{ name[0] }}' src='{{ site.baseurl }}/img/{{ include.folder }}/{{ include.data }}{% if include.folder == "photo" %}.jpg{% endif %}'>
	{% endif %}
</div>
{% endfor %}
```

This kind of templating was an order of magnitude better than copy-pasting HTML or modifying the DOM through client-side Javascript.

React and JSX, through their use of XML and JS syntax, feels even more natural. Here's the equivalent section of code as above:

```jsx
{galleryArray.map(item => (
    <div className="px-4 md:w-1/2 lg:w-1/3 mb-8" key={item.name}>
        {item.name.slice(-3) === "mp4" ? (
            <video
                src={`/portfolio-${isDesign ? "design" : "photo"}/${item.name}`}
                className="shadow-md w-full"
                autoPlay={true}
                muted={true}
                loop={true}
            />
        ) : (
            <img src={`/portfolio-${isDesign ? "design" : "photo"}/${item.name}`} alt="" className="shadow-md w-full"/>
        )}
    </div>
))}
```

Where `galleryArray` is simply the CSV file converted to a JSON file and imported with `import PhotoGallery from "../components/PhotoGallery"`. It could also be an array of objects defined in one page or component file and then exported to multiple pages, a technique I used for the various "experience" lists across the website.

![Experience list on new website](/blog/2021-12/experience.png)

Jekyll includes are another basic but vital templating feature, allowing you to put re-used chunks of code in a file and insert them throughout your site by writing `{% include filename.html [prop]=[value] %}`.

In React, the functionality of these includes is of course replaced by components with XML syntax, i.e. `<Component [prop]={[value]}/>`.

## Replicating my blog in NextJS

Jekyll's templating features were super useful, but most impressive was its blog engine. It was spectacularly simple. Have a `_posts` folder, put markdown files in it with the necessary frontmatter, and Jekyll would throw the page up at `samsonzhang.com/yyyy/mm/dd/title-of-your-post`. I posted 65 blog posts this way:

![Screenshot of markdown files for blog posts](/blog/2021-12/posts.png)

Replicating this blog engine, more or less, was the most technically involved part of rebuilding my website.

The ability to do so hinged on NextJS's "dynamic routing" and build-time path specification features.

Dynamic routing means that, instead of specifying the exact URL of every page that Next will serve to visitors, you can specify a format of URL to fit, like `/project/[slug]`, and Next will look at some non-predetermined data to see if the page is valid.

In the case of a truly data-driven app, like a social media app, this is a crucial feature: you can't generate a static file for every single `/@username` address, for example. That's much better handled at the time that the request hits the server, when the server can then check against the database of users to see if there's one under the requested username, a condition that may change rapidly as accounts are created and deleted and usernames are changed.

For sites like blogs, this is a less necessary but still highly useful feature. Here the separation between data and code happens not at request time, but build time. For example, if a blog is using an external CMS, it might be useful for the build process to make an API call to that CMS to get the latest content and render it into static files, rather than having all that content be part of the dev codebase.

Here, the markdown files I wrote for Jekyll functions like an external CMS. I can read them in (at least their filenames) with the following Node.js code:

```js
const fs = require("fs");
const files = fs.readdirSync(process.cwd() + "/posts/");
```

Now, in two steps, NextJS allows me to generate a page from each file. In a file under `/pages/[year]/[month]/[day]/[slug].tsx` (brackets literally in the filenames), a structure that reflects the structure of Jekyll's auto-generated URLs, I first specify a function `getStaticPaths`. This function returns an array of objects specifying the URL params of each page I want to generate -- one per markdown file in the `posts` folder.

```js
export const getStaticPaths: GetStaticPaths = () => {
    const fs = require("fs");
    const files = fs.readdirSync(process.cwd() + "/posts/");

    const paths = files.map(file => ({
        params: {year: file.substr(0, 4), month: file.substr(5, 2), day: file.substr(8, 2), slug: file.substr(11, file.length - 14)}
    }));

    return {paths, fallback: false};
}
```

Then, when generating each page, I want to read information from that file and pass it to my React component. I can do this through the `getStaticProps`, specified in the same file:

```js
export const getStaticProps: GetStaticProps = ({params}) => {
    const filename = `${params.year}-${params.month}-${params.day}-${params.slug}.md`;

    const fs = require("fs");
    const fm = require("front-matter");
    const thisFile = fs.readFileSync(process.cwd() + "/posts/" + filename);
    const thisFm = fm(thisFile.toString());

    return {
        props: {
            title: thisFm.attributes.title,
            date: thisFm.attributes.date || null,
            tags: thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [],
            body: thisFm.body,
            filename: filename,
        }
    };
}
```

Note that, using a package called `front-matter`, I'm able to read the same frontmatter that Jekyll relied on. That's the stuff at the beginning of a post between triple-dash lines that looks like this:

```markdown
---
title: peace
layout: post
tags: moments musing
date: '2020-02-23 11:16:49'
---

I sat on the floor of my room...
```

Now here's the entirety of the main function in the post TSX file:

```js
export default function BlogPost(props: BlogPostProps) {
    const {title, body, tags} = props;

    const markdown = remark()
        .use(remarkParse)
        .use(remarkFootnotes)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeStringify, {allowDangerousHtml: true})
        .processSync(body);

    const stripped = stripMarkdown(body);
    const readingTime = getReadingTime(stripped);

    return (
        <div className="max-w-3xl mx-auto px-4">
            <SEO title={title}/>
            <BackLink/>
            <h2 className="font-bold text-4xl leading-[1.4]">{title}</h2>
            <div className="text-xl my-8">
                {tags.map(tag => (
                    <Link href={`/blog/${tag}`} key={"tag"+tag}>
                        <a className="mr-2">#{tag}</a>
                    </Link>
                ))}
                <p>{format(getDateFromBlogPostProps(props), "MMMM d, yyyy")}</p>
            </div>
            <p className="opacity-50 my-8 uppercase font-bold">{readingTime} min read</p>
            <div dangerouslySetInnerHTML={{__html: markdown.value.toString()}} className="prose mt-8" style={{fontSize: 20}}/>
            <div id="hyvor-talk-view" className="border-top pt-6 mt-6"/>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
            var HYVOR_TALK_WEBSITE = 1008; // DO NOT CHANGE THIS
            var HYVOR_TALK_CONFIG = {
                url: false,
                id: false
            };
            `}}/>
            <script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"/>
        </div>
    )
}
```

First, note that I read in the title, body, and tags from the props passed. (Date is read by the `getDateFromBlogPostProps(props)` call later on, a function that I define elsewhere.) The title and tags can be used directly as a string and array of strings respectively.

Body, on the other hand, is a markdown string -- the entirety of the markdown file for the blog post, minus the frontmatter. To display this, I need to first convert it to HTML.

Thankfully, a ton of good JS tooling exists for this. I used Unified's `remark` along with a few plugins to get the job done. There's a lot of `allowDangerousHtml` and `dangerouslySetInnerHTML`, which would be huge holes for XSS attacks if you were letting dynamic user content through, but I'm doing all of this at build time with local files so it shouldn't be a problem.

The `stripMarkdown` function I call to get the reading time also uses `remark`. It looks like this:

```js
export function stripMarkdown(md: string): string {
    return remark()
        .use(strip)
        .processSync(md)
        .value
        .toString();
}
```

The last thing worth mentioning is the [Hyvor Talk](https://talk.hyvor.com/) embed at the end of the component. Hyvor is a super-easy way to throw comments sections up on statically generated websites. It used to be free and my plan still is; looks like the lowest starting plan now is $5/month. I don't get many comments on my blog, but Hyvor has worked well for the few I've gotten; its main sell (in my eyes) is its simplicity, demonstrated by being able to be transferred from Jekyll to NextJS in a pretty direct copy+paste.

Anyways, `getStaticPaths` and `getStaticProps` combined have the effect of making NextJS generate fully pre-rendered HTML files for every one of the paths specified _at build time_ without you having to code a React page for every single path.

The main blog page, at `/blog`, also uses `getStaticPaths` to bring in data from the markdown files at build time rather than serving the files themselves to the client.

![Screenshot of new blog page](/blog/2021-12/blog.png)

It's similar to the function for single blog pages, but it returns an array of posts rather than a single one:

```js
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
```

A last use of `getStaticPaths` and `getStaticProps` is for generating tag filter pages, which of course also rely on the data in these markdown files. Here's what that code looks like:

```js
export const getStaticPaths: GetStaticPaths = () => {const fs = require("fs");
    const fm = require("front-matter");
    const files = fs.readdirSync(process.cwd() + "/posts/");
    const tags = files.reduce((existingTags, file) => {
        const thisFile = fs.readFileSync(process.cwd() + "/posts/" + file);
        const thisFm = fm(thisFile.toString());
        const thisTags = thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [];
        let newTags = [...existingTags];
        for (let tag of thisTags) {
            if (!existingTags.includes(tag)) newTags = [...newTags, tag];
        }
        return newTags;
    }, []);

    const paths = tags.map(tag => ({
        params: {tag: tag}
    }))

    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = (context) => {
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
    }).filter(d => d.tags.includes(context.params.tag));

    return {props: {posts: JSON.parse(JSON.stringify(posts)), tag: context.params.tag}};
}
```

The pages:

![New blog tag page](/blog/2021-12/tag.png)

A last complication of bringing my blog over is that many blog posts still made use of Liquid template tags, such as `{% include youtube-gen.html ... %}` for YouTube video embeds and `{% highlight ... linenos %}` for code blocks.

Thankfully, these were easy enough to replace. If I were using MDX, I could use a proper React component for the YouTube embeds; instead, I just replaced the template tag with some plain HTML:

```
<div class="yt-container">
    <iframe
        src="{youtube URL}"
        frameBorder="0"
        allowFullScreen
    ></iframe>
</div>
```

Code blocks, on the other hand, are a built-in markdown feature (though not language-based highlighting; this is configurable and Jekyll had it set up automatically, but I haven't bothered to do it on my site). I simply replaced occurrences of `{% highlight %}` and `{% endhighlight %}` with the triple-backtick ``` code block indicator of markdown.

## Conclusion

I don't know how much I'll post on my blog, or on my website for that matter. My digital garden has branched out to [Twitter](https://twitter.com/wwsalmon), [Substack](https://samsonzhang.substack.com), and my own platform of [Postulate](https://postulate.us/@samsonzhang), just to mention a few.

There are tons more features to build. My code and building portfolio isn't optimized for the _amount_ of stuff I've built, I think, requiring too much scrolling to get to anything, and most of the projects still link to external project pages. I would want to build a post recommendation feature and improve my blog in a million other ways if I were to go back to using it as my main blog.

In the meantime, if you want to keep up to date on what I build, subscribe to my [Substack](https://samsonzhang.substack.com) and follow me on [Twitter](https://twitter.com/wwsalmon) 😁