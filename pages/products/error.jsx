const ApiPath = 'https://dummyjson.com/products';
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import ImageCarousel from "/src/components/img_carousel";

export default function Product(props) {

    const notFound = "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=ais_user";

    return (
        <div className={`w-full bg-slate-900 border- border-slate-800 p-4`}>
            <div className="w-48 h-24">
                <img className="w-full h-full" src={notFound} alt="404" />
            </div>
        </div>
    );
}
