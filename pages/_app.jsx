import "../styles/styles.css";
import Link from "next/link";
import HeaderElement from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <div className="w-screen min-h-screen h-auto bg-gradient-to-b from-gray-950 to-blue-950">
            <HeaderElement />
            <main className="w-screen h-auto min-h-full mt-24">
                <Component {...pageProps} />
            </main>
            <Footer/>
        </div>
    );
}

export default MyApp;