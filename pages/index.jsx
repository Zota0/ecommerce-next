import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Home() {
    const router = useRouter();

    console.log(router);

    function ToNav() {
        router.push("/list");
    }

    function ToProducts() {
        router.push("/products");
    }

    function ToClientSide() {
        router.push("/clientside");
    }

    return (
        <div>
            <div>
                <h1>Hello Next.js</h1>
            </div>
            <div>
                <button onClick={ToNav} className="flex w-48 h-24 p-16 m-2 bg-blue-800 text-yellow-400 text-center align-middle">
                    Navigate
                </button>

                <button onClick={ToProducts} className="flex w-48 h-24 p-16 m-2 bg-green-800 text-yellow-400 text-center align-middle">
                    Products
                </button>

                <button onClick={ToClientSide} className="flex w-48 h-24 p-16 m-2 bg-red-800 text-yellow-400 text-center align-middle">
                    Client Side
                </button>
            </div>
        </div>
    );
}