import Link from "next/link";
import Image from "next/image";

const Footer = () => {

    return (
        <div className="bg-black flex flex-row justify-center align-middle text-center items-center h-20 w-screen overflow-hidden">
            <div className="h-[calc(10%)] bg-white w-full"></div>
            <div className="h-[calc(90%)] w-full flex flex-col justify-center align-middle items-center">
                <div className="w-1/5 h-full"></div>
                <div className="w-1/5 h-full">Skontaktuj się na: zota0.dev@gmail.com</div>
                <div className="w-1/5 h-full"></div>
                <div className="w-1/5 h-full"></div>
                <div className="w-1/5 h-full"></div>
            </div>
        </div>
    );
}

export default Footer;