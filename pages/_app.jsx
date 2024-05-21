import "../styles/styles.css";
import Link from "next/link";
import HeaderElement from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <div className="w-screen min-h-screen h-auto">
            <HeaderElement />            
            <main className="p-16 bg-gradient-to-b from-gray-900 to-blue-950 mt-24 w-[80%] h-full min-h-[80svh]">
                <Component {...pageProps} />
            </main>
            <Footer/>
        </div>
    );
}

export default MyApp;