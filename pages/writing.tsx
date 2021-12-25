import Container from "../components/Container";
import {HomeItemObj, WritingItemObj} from "../utils/types";
import WritingItem from "../components/WritingItem";
import SEO from "../components/SEO";
import TwoColContainer from "../components/TwoColContainer";
import TwoColChild from "../components/TwoColChild";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienceSection";
import {currentExperience, pastExperience} from "../utils/experience";

export default function Writing({}: {  }) {
    const essays: WritingItemObj[] = [
        {
            title: "river",
            url: "https://postulate.us/@samsonzhang/p/2021-10-20-river-pmvAtcUbBXoRPTSg66wY8p",
        },
        {
            title: "how to be happy",
            url: "https://postulate.us/@samsonzhang/p/2021-12-14-how-to-be-happy-miXwjzkuiwJjUkkMQrSEvZ",
        },
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
            title: "How to Innovate and Create a Culture of Innovation",
            url: "https://samsonzhang.medium.com/how-to-innovate-and-create-a-culture-of-innovation-fb6614f8bc1",
        },
        {
            title: "How to Have Original Thoughts: The Importance of Tradition and Asking Bad Questions",
            url: "https://postulate.us/@samsonzhang/p/2021-03-12-How-to-Have-Original-Thoughts%3A-3fXWPXwup49YMJF6ZLPHQy",
        },
        {
            title: "The Sync Gap: How to Be Creative in Conversation, Writing, and Work",
            url: "https://samsonzhang.medium.com/the-sync-gap-how-to-be-creative-in-conversation-writing-and-work-dd5ef61f608c",
        },
        {
            title: "Why Hustle? Hustle Culture as a Survival Mechanism and Driver of Human Progress",
            url: "https://samsonzhang.medium.com/why-hustle-hustle-culture-as-a-mechanism-to-seek-belonging-and-change-the-world-6980def00678",
        },
    ];

    const journalism: WritingItemObj[] = [
        {
            title: "Bruce Harrell becomes Seattle’s first elected Asian American mayor after bitter campaign",
            publication: "The Yappie",
            url: "https://theyappie.com/bruce-harrell-seattle-victory/",
        },
        {
            title: "Aftab Pureval wins Cincinnati election in milestone for Midwest’s Asian Americans",
            publication: "The Yappie",
            url: "https://theyappie.com/aftab-pureval-wins-cincinnati-election-in-milestone-for-midwests-asian-americans/",
        },
        {
            title: "Amazin LeThi is unapologetic about fighting for Asian and LGBTQ inclusion in sports",
            publication: "The Yappie",
            url: "https://theyappie.com/asian-lgbtq-sports-advocacy-amazin-lethi/",
        },
        {
            title: "Palestinian poet articulates liberation: SJP hosts activist Mohammed El-Kurd",
            publication: "The Student Life",
            url: "https://tsl.news/palestinian-poet-activist-liberation/",
        },
        {
            title: "A career preserved in time: Fossil species named for Pomona Dean Robert Gaines",
            publication: "The Student Life",
            url: "https://tsl.news/pomona-professor-named-after-fossil/",
        },
        {
            title: "Claremont Institute defends senior fellow who advised Trump on overturning election",
            publication: "The Student Life",
            url: "https://tsl.news/claremont-institute-defends-john-eastman/",
        },
        {
            title: "Amazin LeThi is unapologetic about fighting for Asian and LGBTQ inclusion in sports",
            publication: "The Yappie",
            url: "https://theyappie.com/asian-lgbtq-sports-advocacy-amazin-lethi/",
        },
        {
            title: "‘The only way to survive is by taking care of one another’: Meet the AAPI activists rising above the hate",
            publication: "The Yappie",
            url: "https://theyappie.com/aapi-activists-rising-above-hate/",
        },
        {
            title: "California greenlights $156 million budget to combat anti-Asian hate",
            publication: "The Yappie",
            url: "https://theyappie.com/california-aapi-hate-budget/",
        },
        {
            title: "‘Do some damage back’: Inside the Ronin Project’s plan to maximize AAPI political power",
            publication: "The Yappie",
            url: "https://theyappie.com/do-some-damage-back-inside-the-ronin-projects-plan-to-maximize-aapi-political-power/",
        },
    ];

    const creative: WritingItemObj[] = [
        {
            title: "butcher (prose)",
            publication: "The Incandescent Review, Volume 7",
            url: "https://postulate.us/@samsonzhang/p/2021-03-02-i%2C-rapist-vDS3j1YZMdMRKzTGZ6mPPC",
        },
    ];

    const experience: HomeItemObj[] = [...currentExperience, ...pastExperience].filter(d => d.serif && d.title !== "Student");

    return (
        <Container className="mt-16">
            <SEO title="Writing"/>
            <h1 className="font-bold text-4xl mb-2">Writing</h1>
            <p className="text-gray2 font-serif text-2xl">Journalism and essays</p>
            <TwoColContainer>
                <TwoColChild>
                    <PortfolioSection heading="Journalism">
                        {journalism.map((item, i) => <WritingItem item={item} key={`journalism${i}`}/>)}
                    </PortfolioSection>
                    <PortfolioSection heading="Creative">
                        {creative.map((item, i) => <WritingItem item={item} key={`creative${i}`}/>)}
                    </PortfolioSection>
                </TwoColChild>
                <TwoColChild>
                    <ExperienceSection experience={experience}/>
                    <PortfolioSection heading="Essays">
                        {essays.map((item, i) => <WritingItem item={item} key={`essays${i}`}/>)}
                    </PortfolioSection>
                </TwoColChild>
            </TwoColContainer>
        </Container>
    );
}