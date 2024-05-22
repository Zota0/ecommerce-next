import Link from 'next/link';
import Image from 'next/image';


const GridProduct = ({item}) => {

    return (
        <Link href={`/products/${item.id}`} className='w-56 h-56'>
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
    );
}

export default GridProduct;