import Container from "../components/Container";
import {WritingItemObj} from "../utils/types";
import WritingItem from "../components/WritingItem";
import SEO from "../components/SEO";

export default function Writing({}: {  }) {
    const essays: WritingItemObj[] = [
        {
            title: "Journalistic Bias, Not Objectivity, Holds Those in Power Accountable: Deconstructing the Myth of Objectivity in News Media",
            publication: "NOVIDEM Magazine",
            url: "https://medium.com/novidem-magazine/journalistic-bias-not-objectivity-holds-those-in-power-accountable-deconstructing-the-myth-of-2b09c3de517f?source=collection_home---7------0-----------------------",
        },
        {
            title: "How Attacking Racial Political Identities Perpetuates White Supremacy",
            publication: "NOVIDEM Magazine",
            url: "https://medium.com/novidem-magazine/journalistic-bias-not-objectivity-holds-those-in-power-accountable-deconstructing-the-myth-of-2b09c3de517f?source=collection_home---7------0-----------------------",
        },
        {
            title: "What Does It Mean To Be Asian American? A Narrative of Coronavirus, Andrew Yang, and America",
            publication: "The Incandescent Review",
            url: "https://www.theincandescentreview.org/post/what-does-it-mean-to-be-asian-american-a-narrative-of-coronavirus-andrew-yang-and-america",
        },
        {
            title: "How to Have Original Thoughts: The Importance of Tradition and Asking Bad Questions",
            url: "https://postulate.us/@samsonzhang/p/2021-03-12-How-to-Have-Original-Thoughts%3A-3fXWPXwup49YMJF6ZLPHQy",
        },
    ];

    const journalism: WritingItemObj[] = [
        {
            title: "‘Do some damage back’: Inside the Ronin Project’s plan to maximize AAPI political power",
            publication: "The Yappie",
            url: "https://theyappie.com/do-some-damage-back-inside-the-ronin-projects-plan-to-maximize-aapi-political-power/",
        },
        {
            title: "Extraterrestrial Rainbows and Homopolar Generators: Andover Students to Compete at U.S.A. Young Physicists’ Tournament",
            publication: "The Phillipian",
            url: "https://phillipian.net/2019/01/11/extraterrestrial-rainbows-homopolar-generators-andover-students-compete-u-s-young-physicists-tournament/",
        },
    ];

    const creative: WritingItemObj[] = [
        {
            title: "butcher (prose)",
            publication: "The Incandescent Review, Volume 7",
            url: "https://postulate.us/@samsonzhang/p/2021-03-02-i%2C-rapist-vDS3j1YZMdMRKzTGZ6mPPC",
        },
        {
            title: "peppercorn (prose)",
            url: "https://www.samsonzhang.com/2020/12/11/peppercorn.html",
        },
        {
            title: "pedestal (prose)",
            url: "https://www.samsonzhang.com/2020/04/30/pedestal.html",
        },
    ]

    return (
        <Container className="mt-16">
            <SEO title="Writing"/>
            <h1 className="font-bold text-4xl mb-2">Writing</h1>
            <p className="text-gray2 font-serif text-2xl">Journalism, essays, prose, poetry</p>
            <div className="md:flex md:-mx-12">
                <div className="md:w-1/2 md:mx-12">
                    <div className="mt-20">
                        <h2 className="font-bold text-xl">Essays and editorials</h2>
                        {essays.map(item => <WritingItem item={item}/>)}
                    </div>
                </div>
                <div className="md:w-1/2 md:mx-12">
                    <div className="mt-20">
                        <h2 className="font-bold text-xl">Journalism</h2>
                        {journalism.map(item => <WritingItem item={item}/>)}
                    </div>
                    <div className="mt-20">
                        <h2 className="font-bold text-xl">Creative</h2>
                        {creative.map(item => <WritingItem item={item}/>)}
                    </div>
                </div>
            </div>
        </Container>
    );
}