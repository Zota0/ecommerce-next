import "../styles/styles.css";
import Link from "next/link";
import HeaderElement from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <div className="w-screen min-h-screen h-auto">
            <HeaderElement />            
            <main className="mt-24 w-[90%] h-full">
                <Component {...pageProps} />
            </main>
            {/* <footer className="absolute bottom-0 -top-[100svh] left-0 w-full pb-4">
                Created by Zota0 - <Link href="https://github.com/Zota0">Github</Link>
            </footer> */}
            <Footer/>
        </div>
    );
}

export default MyApp;