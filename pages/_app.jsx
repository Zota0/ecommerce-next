import "../styles/styles.css";
import Link from "next/link";
import HeaderElement from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <div className="w-screen min-h-screen h-auto bg-gradient-to-b from-gray-950 to-blue-950">
            <HeaderElement />            
            <main className="bg-gray-900 p-16 mt-24 w-[88%] h-full min-h-[80svh]">
                <Component {...pageProps} />
            </main>
            <Footer/>
        </div>
    );
}

export default MyApp;