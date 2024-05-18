import "../styles/styles.css";
import Link from "next/link";
import HeaderElement from "../src/components/Header";

function MyApp({Component, pageProps}) {
    return (
        <div className="w-screen h-screen">
            <HeaderElement />
            <div className="mt-20 w-full min-h-full h-auto">
                <main className="w-[85%] h-full">
                    <Component {...pageProps} />
                </main>
            </div>
            {/* <footer className="absolute bottom-0 -top-[100svh] left-0 w-full pb-4">
                Created by Zota0 - <Link href="https://github.com/Zota0">Github</Link>
            </footer> */}
        </div>
    );
}

export default MyApp;