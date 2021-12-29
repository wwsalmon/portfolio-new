import Container from "../../components/Container";
import ProjectHeader from "../../components/ProjectHeader";
import YTEmbed from "../../components/YTEmbed";
import ItalicHeading from "../../components/ItalicHeading";
import {ReactNode, useState} from "react";
import {SliderButton} from "../../components/FilmItem";

export const FlexContainer = ({children}: {children: ReactNode}) => (
    <div className="md:-mx-4 my-16 md:flex">
        {children}
    </div>
)

export const Slider = ({id, filepath, filenames}: {id: string, filepath: string, filenames: string[]}) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    return (
        <>
            <div className="relative w-full overflow-hidden border rounded-md" style={{paddingBottom: "56.25%"}}>
                {filenames.map((file, i) => (
                    <div
                        className={`absolute w-full h-full flex items-center justify-center transition-all ${slideIndex === i ? "left-0" : slideIndex > i ? "-left-full" : "left-full"}`}
                        key={`slider-${id}-${i}`}
                    >
                        <img src={filepath + file} className="max-w-full max-h-full"/>
                    </div>
                ))}
                <SliderButton
                    right={true}
                    selectedIndex={slideIndex}
                    setSelectedIndex={setSlideIndex}
                    length={filenames.length}
                />
                <SliderButton
                    right={false}
                    selectedIndex={slideIndex}
                    setSelectedIndex={setSlideIndex}
                    length={filenames.length}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] flex">
                    <div className="p-2 bg-white">
                        <span>{slideIndex + 1}/{filenames.length}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export const ProjectSection = ({id, filepath, filenames, children}: {id: string, filepath: string, filenames: string[], children: ReactNode}) => (
    <FlexContainer>
        <div className="md:w-2/3 md:px-4 mb-4 md:mb-0">
            <Slider
                id={id}
                filepath={filepath}
                filenames={filenames}
            />
        </div>
        <div className="md:w-1/3 md:px-4">
            {children}
        </div>
    </FlexContainer>
)

export default function Autoturner({}: {}) {
    return (
        <Container className="mt-16">
            <ProjectHeader
                backLink="/building"
                backLabel="code/building"
                title="Auto Turner"
                description="A mechanical page turner for musicians. The final result of Cooper Union's 6 week product design and prototyping Makerspace class in the Summer STEM 2018 program."
            />
            <FlexContainer>
                <div className="md:w-1/2 md:px-4 mb-8 md:mb-0">
                    <YTEmbed ytid="bW62-upWoQY"/>
                    <p className="mt-8">
                        <b>Video:</b> demo of Auto Turner in use while playing a piece on a grand piano, operated by a foot pedal.
                    </p>
                    <p className="mt-4">
                        The final prototype was made with 3D printed and laser cut acrylic parts and an Arduino-driven circuit.
                    </p>
                </div>
                <div className="md:w-1/2 md:px-4">
                    <YTEmbed ytid="yL24DlAJdYg"/>
                    <p className="mt-8">
                        <b>Video:</b> mechanism designed for lifting, flipping, and setting down paper with wheels and arm.
                    </p>
                </div>
            </FlexContainer>
            <hr className="my-16"/>
            <ItalicHeading>Design & prototyping process</ItalicHeading>
            <ProjectSection
                id="week1"
                filepath="/portfolio-code/autoturner/"
                filenames={["1-1.png", "1-2.png", "1-3.png"]}
            >
                <p><b>Week 1, ideation: </b> Coming up with the ideas and basic design for our project.</p>
            </ProjectSection>
            <ProjectSection
                id="week2"
                filepath="/portfolio-code/autoturner/"
                filenames={["2-1.jpg", "2-2.png", "2-3.png", "2-4.png"]}
            >
                <p><b>Week 2/3, early prototyping: </b> We design our mount and grabber mechanism. We spend a lot of time and iterations figuring out the tolerances of the printer and changing our dimensions slightly to make the mechanism work.</p>
            </ProjectSection>
            <ProjectSection
                id="week4"
                filepath="/portfolio-code/autoturner/"
                filenames={["3-1.gif", "3-2.gif", "3-3.png", "3-4.png", "3-5.jpg"]}
            >
                <p><b>Week 4, Grabber Testing, Mount Early Prototyping</b></p>
            </ProjectSection>
            <ProjectSection
                id="week5"
                filepath="/portfolio-code/autoturner/"
                filenames={["4-1.gif", "4-2.gif", "4-3.png", "4-4.png"]}
            >
                <p><b>Week 5, First Functional Prototype, Testing</b>: After several iterations, the whole device put together finally works as we want it to. We start designing an acrylic assembly to make the whole device sturdier and more reliable.</p>
            </ProjectSection>
            <ProjectSection
                id="week6"
                filepath="/portfolio-code/autoturner/"
                filenames={["final.gif"]}
            >
                <p><b>Week 6, final prototype</b>: We laser cut and assemble our acrylic base; the device is now one piece, without relying on pieces of cardboard taped to the stand to function. It can now be moved around and sit on a grand piano. We also build a foot pedal.</p>
            </ProjectSection>
            <hr className="my-16"/>
        </Container>
    );
}