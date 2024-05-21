
const ApiPath = 'https://dummyjson.com/products';
import React, { useEffect, useState, cache } from 'react';
import Link from 'next/link';

export default function ServerSide(props) {

    const { getServerSideData } = props;
    console.log(getServerSideData);
    const SSR_Data = getServerSideData.products;

    return (
        <>
            <h1>Wszystkie produkty</h1>
            <br />
            <div className='w-full flex-row'>
                <br />
                <div className='w-full h-full flex justify-between gap-8 align-middle items-center text-center flex-row'>
                    {
                        // (SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                        //     <Link key={item.id} href={`/products/${item.id}`} className='w-64 h-64'>
                        //         <div className='aspect-square border-2 border-black bg-black flex justify-center gap-0.5 items-center h-full w-full overflow-hidden flex-row'>
                        //             <div>
                        //                 <div className='text-center h-full w-full'>
                        //                     {item.title}
                        //                 </div>
                        //             </div>
                        //             <div>
                        //                 <div className='overflow-hidden h-full w-full'>
                        //                     <img
                        //                         src={item.thumbnail}
                        //                         alt={item.title + `image`}
                        //                         width={1024}
                        //                         height={1024}
                        //                         className='h-full w-full'
                        //                     />
                        //                 </div>
                        //             </div>
                        //             <div>
                        //                 <div className='text-center h-full w-full'>
                        //                     {item.price + `zł`}
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </Link>
                        // )) : null)

                        (SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`} className='w-full h-96'>
                                <div className='border-2 border-black bg-black flex justify-center gap-0.5 items-center h-full w-full overflow-hidden flex-row'>
                                    <div>
                                        <div className='text-center h-full w-full'>
                                            {item.title}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='overflow-hidden h-full w-full'>
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title + `image`}
                                                width={1024}
                                                height={1024}
                                                className='h-full w-full'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-center h-full w-full'>
                                            {item.price + `zł`}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : null)
                    }
                </div>

                {/* <ul className='list-disc w-1/2 px-4 py-2'>
                    {
                        DataLoading ? (<p>Loading...</p>) : (
                            CSR_Data && CSR_Data.length > 0 ? CSR_Data.map((item) => (
                                <Link key={item.id} href={`/products/${item.id}`}>
                                        <li>{item.title} - ${item.price}</li>
                                    <br />
                                </Link>
                            )) : null)
                    }
                </ul> */}
            </div>
        </>
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