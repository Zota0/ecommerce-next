
const ApiPath = 'https://dummyjson.com/products';
import React, { useEffect, useState, cache } from 'react';
import Link from 'next/link';

export default function ServerSide(props) {

    const [ProductViewType, setProductViewType] = useState('list');
    const { getServerSideData } = props;
    console.log(getServerSideData);
    const SSR_Data = getServerSideData.products;

    return (
        <>
            <h1>Wszystkie produkty</h1>
            <div className='w-full h-14 bg-black'>
                <div className='w-full h-full'>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'></div>
                    <div className='w-1/12 h-full'>
                        <div className='w-full h-full flex justify-center items-center text-white gap-0'>
                            <button className='w-1/2 h-full' onClick={() => setProductViewType('grid')}>
                                {(ProductViewType == 'grid') ? (<span className='text-lime-500'>Grid</span>) : (<span className='text-red-500'>Grid</span>)
                                }
                            </button>
                            <button className='w-1/2 h-full' onClick={() => setProductViewType('list')}>
                                {(ProductViewType == 'list') ? (<span className='text-lime-500'>List</span>) : (<span className='text-red-500'>List</span>)
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='w-full flex-row'>
                <br />
                <div className='w-full h-full flex justify-center gap-8 align-middle items-center text-center flex-row'>
                    {
                        ((ProductViewType=='grid') ? ((SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`} className='w-64 h-64'>
                                <div className='aspect-square border-2 border-black bg-black flex justify-center gap-0.5 items-center h-full w-full overflow-hidden flex-row'>
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
                        ) : ((SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`} className='w-[calc(80%)] h-64'>
                                <div className='aspect-square border-2 border-black bg-black flex justify-center gap-0.5 items-center h-full w-full overflow-hidden flex-row'>
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
                        ))
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