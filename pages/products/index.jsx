
const ApiPath = 'https://dummyjson.com/products';
import React, { useEffect, useState, cache } from 'react';
import Link from 'next/link';


export default function ServerSide(props) {

    const { getServerSideData } = props;
    console.log(getServerSideData);
    const SSR_Data = getServerSideData.products;

    return (
        <>
            <h1>Server Side</h1>
            <div className='w-full flex-row'>
                <br />
                <ul className='list-disc w-full'>
                    {
                        (SSR_Data && SSR_Data.length > 0 ? SSR_Data.map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`}>
                                <li>{item.title} - ${item.price}</li>
                                <br />
                            </Link>
                        )) : null)
                    }
                </ul>

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