const ApiPath = 'https://dummyjson.com/products';
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import ImageCarousel from "/src/components/img_carousel";

export default function Product(props) {

    const ProductRouter = useRouter();
    const { query } = ProductRouter;
    const { product } = query;

    const { getServerSideData } = props;
    const ProductData = (getServerSideData.products[product-1]);
    const [ZoomedImage, setZoomedImage] = useState(false);
    const [ZoomedImageID, setZoomedImageID] = useState(0);
    const [DialogOpened, setDialogOpened] = useState(false);
    const [DialogOpenedStyle, setDialogOpenedStyle] = useState('');

    const ImageZoom = (ImgID) => {
        console.log((ImgID ? ImgID : 0));
        setZoomedImageID((ImgID ? ImgID : 0));
        console.log(ZoomedImageID);
        setZoomedImage(true);
        console.log(ZoomedImage);
        setDialogOpenedStyle('overflow-hidden');
    }

    const CloseZoom = () => {
        setZoomedImage(false);
        setDialogOpenedStyle('');
    }


    const ImageCarouselStyles = {
        main: "relative w-96 h-96 overflow-hidden p-0 m-2",
        img_group: "relative w-full h-full",
        img_btn: "absolute inset-0 flex items-center justify-center",
        img: "object-contain w-[90%] h-[90%]",
        btn_group: "absolute top-0 left-0 w-full h-full flex justify-between items-center",
        btn: "bg-gray-800 text-white px-4 py-2 rounded-full",
        radio_wrapper: "overflow-hidden absolute top-[95%] bottom-0 left-[20%] w-[60%] items-center h-4 flex justify-between",
        radio_group: "flex h-full w-full justify-center items-center",
        radio_btn: "bg-black p-32 mx-1 w-4 h-4 rounded-full border-4 border-gray-800",
    }

    const ZoomedImageCarouselStyles = {
        main: "relative w-full h-full overflow-hidden p-0 m-2",
        img_group: "relative w-full h-full",
        img_btn: "absolute inset-0 flex items-center justify-center",
        img: "select-none h-full w-full aspect-square",
        btn_group: "absolute top-0 left-0 w-full h-full flex justify-between items-center",
        btn: "bg-gray-800 text-white px-4 py-2 rounded-full",
        radio_wrapper: "overflow-hidden absolute top-[95%] bottom-0 left-[20%] w-[60%] items-center h-4 flex justify-between",
        radio_group: "flex h-full w-full justify-center items-center",
        radio_btn: "bg-black p-32 mx-1 w-4 h-4 rounded-full border-4 border-gray-800",
    }



    return (
        <div className={`w-full bg-slate-900 border- border-slate-800 p-4` + " " + DialogOpenedStyle}>
            <div>
                <h2>Produkt: {ProductData.title}</h2>
                <p>Kategoria: {ProductData.category} <span className="px-4">|</span> Nr. Artykułu: {ProductData.id}</p>
            </div>
            <div className="flex flex-row">
                <div className="h-full w-5/12 bg-white overflow-hidden aspect-w-16 aspect-h-9">
                    <div className="flex justify-between align-middle text-center flex-warp flex-col aspect-video mx-auto"> 
                        <ImageCarousel images={ProductData.images} Click={(e) => ImageZoom(e.target.id)} Style={ImageCarouselStyles} /> 
                        <dialog open={ZoomedImage} className="z-100 top-[10%] absolute bg-black aspect-square h-[calc(85%)] w-[calc(85%)]">
                            <div className="w-full h-full flex justify-center items-center flex-row text-center">
                                <h5>{ProductData.title}</h5>    
                                <button className="closeBtn bg-transparent bg-none aspect-square leading-none font-bold p-8 text-6xl text-red-600 rounded-full absolute -top-[5%] left-[96%]" onClick={CloseZoom}>
                                    ❌
                                </button>
                                <div className="w-full h-full"> 
                                <ImageCarousel
                                Style={ZoomedImageCarouselStyles}
                                    images={ProductData.images}
                                    Click={(e) => console.log(e)}
                                    StartIndex={parseInt(ZoomedImageID)}
                                />
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className="h-full w-3/12">
                    {ProductData.description}
                    <br />
                    <br />
                    <table className="border-4 border-white p-2 border-solid">
                        <tbody>
                            <tr>
                                <td className="font-extrabold border-2 border-white p-2 border-solid">Marka:</td>
                                <td className="border-2 border-white p-2 border-solid">{ProductData.brand}</td>
                            </tr>
                            <tr>
                                <td className="font-extrabold border-2 border-white p-2 border-solid">Model:</td>
                                <td className="border-2 border-white p-2 border-solid">{ ProductData.title.replace(ProductData.brand, "") }</td>
                            </tr>
                        </tbody>
                    </table>
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