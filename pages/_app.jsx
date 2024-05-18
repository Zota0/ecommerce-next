import "../styles/styles.css";
import Link from "next/link";
import Header from "../src/components/Header";

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Header />
            <div className="mt-18 w-screen h-screen">
                <main className="w-[85%]">
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