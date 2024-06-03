
const ApiPath = 'https://dummyjson.com/products/search?q=phone';
import React, { useEffect, useState, cache } from 'react';
import Link from 'next/link';
import GridProduct from '../../src/components/product_grid';
import ListProduct from '../../src/components/product_list';

export default function ServerSide(props) {

    const [ProductViewType, setProductViewType] = useState('list');
    const { getServerSideData } = props;
    console.log(getServerSideData);
    const SSR_Data = getServerSideData.products;

    const c_SSR_Data = React.cache(SSR_Data);

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
                                {(ProductViewType == 'grid') ? (<span className='text-lime-500'>Siatka</span>) : (<span className='text-red-500'>Siatka</span>)
                                }
                            </button>
                            <button className='w-1/2 h-full' onClick={() => setProductViewType('list')}>
                                {(ProductViewType == 'list') ? (<span className='text-lime-500'>Lista</span>) : (<span className='text-red-500'>Lista</span>)
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='w-full flex-row'>
                <br />
                <div className='w-full h-full flex justify-center gap-2 align-middle items-center text-center flex-row'>
                    {
                        ((ProductViewType=='grid') ? (
                            SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                                ProductViewType === 'grid' ? <GridProduct key={item.id} item={item} />  : <ListProduct key={item.id} item={item} />
                            )):null
                        ):null)
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
