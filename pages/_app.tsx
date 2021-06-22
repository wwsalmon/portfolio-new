import "../styles/globals.css";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

function MyApp({Component, pageProps}) {
    return (
        <div className="relative" style={{minHeight: "100vh"}}>
            <Navbar/>
            <Component {...pageProps} />
            <div className="h-24 invisible"/>
            <div className="w-full h-20 absolute bottom-0" style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)"}}/>
        </div>
    );
}

export default MyApp;
