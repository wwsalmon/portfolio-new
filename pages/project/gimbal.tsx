import Container from "../../components/Container";
import ProjectHeader from "../../components/ProjectHeader";
import {FlexContainer, ProjectSection, Slider} from "./autoturner";
import YTEmbed from "../../components/YTEmbed";

export default function Gimbal({}: {}) {
    return (
        <Container className="mt-16">
            <ProjectHeader
                backLink="/building"
                backLabel="code/building"
                title="DIY Motorized Camera Gimbal"
                description="Building a motorized 3-axis gimbal to stabilize cameras for filmmaking using 3D printing and laser cutting."
            />
            <FlexContainer>
                <div className="md:w-2/3 md:px-4 mb-8 md:mb-0">
                    <YTEmbed ytid="c5Udwl8OnfE"/>
                </div>
                <div className="md:w-1/3 md:px-4">
                    <p>Camera gimbals allow filmmakers to replicate the stability and camera movement of a Hollywood cinema camera and steadicam rig but with much smaller cameras like DSLRs and at a lower price and greater flexibility. I’ve always wanted one for myself, but I thought it would be more fun to try and build one myself in my school’s makerspace than to buy one.</p>
                </div>
            </FlexContainer>
            <ProjectSection
                id="gimbal-2"
                filepath="/portfolio-code/gimbal/"
                filenames={["thumb.gif", "sketch1.jpg", "sketch2.jpg", "sketch3.jpg", "sketch4.jpg"]}
            >
                <p>Building a camera gimbal in a school makerspace on my own has been expectedly hard, and I’ve had limited time to work on the project. I worked out the electronics and basic design and completed a functional 2-axis prototype (seen above). When adding the third axis, the camera became out of balance and the motors couldn’t handle it. The roll arm also proved too weak to hold up the other two arms, three motors, and the camera, starting to flex and crack apart. My next steps will be coming up with a new design with adjustable arms for balance and a stronger material or more supports so the arms will remain stiff and stable.</p>
            </ProjectSection>
        </Container>
    )
}