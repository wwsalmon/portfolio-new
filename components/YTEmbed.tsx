export default function YTEmbed({ytid, className} : {ytid: string, className?: string}) {
  return (
    <div className={"relative w-full " + (className || "")} style={{paddingBottom: "56.25%"}}>
        <iframe
            src={`https://www.youtube.com/embed/${ytid}?modestbranding=1`}
            frameBorder={0}
            allowFullScreen={true}
            className="absolute w-full h-full"
        />
    </div>
  );
}