import Link from "next/link";
import Image from "next/image";

const Footer = () => {

    return (
        <div className="w-screen bottom-0 absolute flex flex-col h-14 justify-center align-middle items-center">
            <div className="w-1/5 h-full"></div>
            <div className="w-1/5 h-full">Skontaktuj się na: zota0.dev@gmail.com</div>
            <div className="w-1/5 h-full"></div>
            <div className="w-1/5 h-full"></div>
            <div className="w-1/5 h-full"></div>
        </div>
    );
}

export default Footer;