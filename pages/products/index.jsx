import { Image } from 'next/image';

const Products = () => {

    return (
        <div className='bg-gray-950 grid grid-cols-2 w-full h-full overflow-y-scroll overflow-x-hidden'>
            <div className='absolute w-[calc(20%)] h-full'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="w-[80%] h-96">
                <div className="w-full h-full flex items-center justify-center flex-row">
                    <div className="p-4 w-1/2 h-48 bg-black">
                        <img src={`static/cart.svg`} alt="Hello"  width={100} height={100} />
                    </div>
                    
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Lorem.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Sed.</div>
                    <div className="p-4 w-1/2 h-48 bg-black">Voluptas.</div>
                </div>
            </div>
        </div>
    );
}

export default Products;