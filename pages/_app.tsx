import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Contact from "../components/Contact";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import {Router} from "next/router";

Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({Component, pageProps}) {
    return (
        <div className="relative" style={{minHeight: "100vh"}}>
            <Navbar/>
            <Component {...pageProps} />
            <Container>
                <Contact/>
            </Container>
            <div className="h-24 invisible"/>
            <div className="w-full h-20 absolute bottom-0" style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)"}}/>
        </div>
    );
}

export default MyApp;
