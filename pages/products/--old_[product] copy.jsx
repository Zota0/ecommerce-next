const ApiPath = 'https://dummyjson.com/products';
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import ImageCarousel from "/src/components/img_carousel";

export default function Details(props) {

    const ProductRouter = useRouter();
    console.log(ProductRouter);
    const { query } = ProductRouter;
    console.log(query);
    const { product } = query;

    const { getServerSideData } = props;
    const ProductData = (getServerSideData.products[product]);

    console.log(ProductData);

    const [ZoomedImage, setZoomedImage] = useState(false);
    const [ZoomedImageID, setZoomedImageID] = useState('');

    const ImageZoom = (ImgID) => {
        console.log(ImgID);
        setZoomedImageID(ImgID);
        setZoomedImage(true);
    }

    const CloseZoom = () => {
        setZoomedImage(false);
    }

    return (
        <div className="w-full bg-slate-600 min-h-full py-2 border-8 border-slate-500 p-4">
            <div>
                <h2>Produkt: {ProductData.title}</h2>
                <p>Kategoria: {ProductData.category} <span className="px-4">|</span> ID: {ProductData.id} <span className="px-4">|</span> Marka:  {ProductData.brand}</p>
            </div>
            <div className="flex flex-row">
                <div className="h-full w-5/12 bg-white overflow-hidden aspect-w-16 aspect-h-9">
                    <div className="flex justify-between align-middle text-center flex-warp flex-col aspect-video mx-auto">
                        <button onClick={(Product) => ImageZoom(Product)}>
                            <img
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                                src={ProductData.images[2]}
                                alt={ProductData.title}
                            />
                        </button>
                        <dialog open={ZoomedImage} className="bg-black fixed aspect-square h-[calc(88%)] w-[calc(88%)]">
                            <div>
                                <h5>{ProductData.title}</h5>
                                <button className="bg-transparent bg-none aspect-square leading-none font-bold p-2 text-8xl text-red-600 rounded-full absolute -top-[8%] zi-10 left-[99%]" onClick={CloseZoom}>
                                    ❌
                                </button>
                                <img
                                className="object-cover object-center w-full h-full"
                                loading="eager"
                                src={ProductData.images[2]}
                                alt={ProductData.title}
                            />
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className="h-full w-3/12">
                    {ProductData.description}
                </div>
                <div className="h-full w-2/12">
                    <h3 className="text-blue-200">Cena: {ProductData.price} zł</h3>
                    <br />
                    <button className="bg-blue-600 border-8 border-blue-900 py-4 px-8 font-extrabold text-xl text-[lightyellow] hover:bg-blue-900 hover:border-blue-600 active:bg-blue-500 active:border-blue-200 btn-bg-transition" type="button">
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const FetchApiSS = await fetch(ApiPath);
    const SSApiData = await FetchApiSS.json();
    return {
        props: {
            getServerSideData: SSApiData
        }
    };
}