import React from "react";
import Masonry from "react-masonry-component";

type GalleryArray = {
    name: string,
    [key: string]: any,
}[];

export default function PhotoGallery({galleryArray, isDesign}: { galleryArray: GalleryArray, isDesign?: boolean }) {
    return (
        <Masonry className="mt-20 -mx-4">
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
        </Masonry>
    );
}