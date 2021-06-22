import Container from "../components/Container";
import SEO from "../components/SEO";
import design from "../utils/design.json";
import Masonry from "react-masonry-component";

export default function Design() {
    return (
        <Container className="mt-16">
            <SEO title="Design"/>
            <h1 className="font-bold text-4xl mb-2">Design</h1>
            <p className="text-gray2 font-serif text-2xl">Editorial, branding, interface, ads, motion graphics</p>
            <Masonry className="mt-20 -mx-4">
                {design.map(item => (
                    <div className="px-4 md:w-1/2 lg:w-1/3 mb-8" key={item.name}>
                        {item.name.slice(-3) === "mp4" ? (
                            <video
                                src={`/portfolio-design/${item.name}`}
                                className="shadow-md w-full"
                                autoPlay={true}
                                muted={true}
                                loop={true}
                            />
                        ) : (
                            <img src={`/portfolio-design/${item.name}`} alt="" className="shadow-md w-full"/>
                        )}
                    </div>
                ))}
            </Masonry>
        </Container>
    );
}