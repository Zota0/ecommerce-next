import Link from 'next/link';
import Image from 'next/image';
const notFound = "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=ais_user";


const GridProduct = ({item}) => {


    const data = {
        id: item.id ?? "error",
        title: item.title ?? 'Tytuł',
        imgs: item.images ?? [notFound],
        brand: item.brand ?? 'Brak firmy',
        model: item.model ?? "Brak nazwy modelu",
        long_desc: item.long_description ?? "<h1><b>Przykładowy</b><br><h2>długi opis</h2></h1>",
        short_desc: item.short_description ?? item.description,
        price: item.price ?? "Nie dostępne",
        ava: item.available ?? false,
        thumb: item.thumbnail ?? notFound,
        brand_link: item.title ? item.title.replace(item.brand,"") : "/products/error"
    }

    const ProductLink = '/products/' + data.id ?? '/products/error';


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