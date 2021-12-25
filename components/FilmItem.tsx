import {FilmObj} from "../pages/film";
import {FiChevronLeft, FiChevronRight, FiPlayCircle} from "react-icons/fi";
import {useState} from "react";
import Link from "next/link";


export default function FilmItem({item, className}: {item: FilmObj, className?: string}) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <div className={"rounded-md shadow-lg hover:shadow-2xl filmItemContainer transition hover:scale-105 " + (className || "")}>
            <div className="overflow-hidden relative" style={{paddingBottom: "56.25%"}}>
                <img
                    src={`/portfolio-film/${item.slug}/thumb.jpg`}
                    alt=""
                    className="absolute top-0 left-0 filmItemThumb z-10"
                />
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-0 z-[5] px-2 py-6 bg-black text-white opacity-50 hover:opacity-100 transition"
                    onClick={() => setSelectedIndex((selectedIndex + 1 === item.images.length) ? 0 : selectedIndex + 1)}
                >
                    <FiChevronRight/>
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-0 z-[5] px-2 py-6 bg-black text-white opacity-50 hover:opacity-100 transition"
                    onClick={() => setSelectedIndex(((selectedIndex - 1) < 0) ? item.images.length - 1 : selectedIndex - 1)}
                >
                    <FiChevronLeft/>
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] flex">
                    <div className="p-2 bg-white">
                        <span>{selectedIndex + 1}/{item.images.length}</span>
                    </div>
                    <Link href={`/${item.slug}`}>
                        <a className="p-2 flex bg-white opacity-75 items-center hover:bg-black hover:text-white transition">
                            <FiPlayCircle/>
                            <span className="ml-2">
                                Full video and story
                            </span>
                        </a>
                    </Link>
                </div>
                {item.images.map((image, i) => (
                    <div key={item.slug + "image" + i} className={`w-full h-full bg-black absolute top-0 left-0 transition flex items-center ${i === selectedIndex ? "opacity-100" : "opacity-0"}`}>
                        {image.substr(image.length - 3) === "mp4" ? (
                            <video autoPlay loop muted className="w-full">
                                <source src={`/portfolio-film/${item.slug}/${image}`} type="video/mp4"/>
                            </video>
                        ) : (
                            <img src={`/portfolio-film/${item.slug}/${image}`} alt="" className="w-full"/>
                        )}
                    </div>
                ))}
            </div>
            <div className="p-4">
                <p className="font-serif font-bold text-lg">{item.title}</p>
                <p>{item.descript}</p>
            </div>
        </div>
    );
}