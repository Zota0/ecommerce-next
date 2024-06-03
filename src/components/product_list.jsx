import Link from 'next/link';
import Image from 'next/image';
const notFound = "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=ais_user";

const ListProduct = ({item}) => {
   
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
        brand_link: item.title ? item.title.replace(data.brand,"") : "/products/error"
    }

    const ProductLink = '/products/' + data.id ?? '/products/error';

    return (
        <div key={data.id} className="m-0 p-0 flex datas-center justify-center align-middle w-full h-64"> 
            <div className="flex datas-center justify-center align-middle w-full gap-0 h-full rounded-3xl bg-black text-white p-2">
                <div className='w-full h-full grid grid-cols-9 grid-rows-1 gap-0'>
                    <div className='bg-black col-span-3 w-full h-full'>
                        <Link href={ProductLink} className='w-full h-full'>
                            <img
                                src={data.thumb}
                                alt={`Product image `+(data.id)+` - `+(data.title)}
                                className='w-full h-full object-contain'
                            />
                        </Link>
                    </div>
                    <div className='w-full h-full col-span-1'></div>
                    <div className='bg-black grid grid-rows-4 col-span-3 w-full h-full'>
                        <Link href={ProductLink}>
                            <h3 className='row-span-1 whitespace-nowrap text-2xl font-mono font-extrabold'>
                                {data.title}
                            </h3>
                        </Link>
                        <p className='row-span-1 text-[14px]'><span>{data.description}</span> {<Link className='whitespace-pre-wrap text-blue-600' href={ProductLink+'#description'}>Czytaj więcej</Link>}</p>
                        <table className='w-full h-full row-span-2'>
                            <tbody className='w-full h-full text-[12px]'>
                                <tr>
                                    <td className='font-bold'>Marka</td>
                                    <td className='decoration-white  decoration-dashed'>
                                        <Link href={`brands/${(data.brand).replace(' ', '-')}`} className='border-b-2 border-b-white border-spacing-2 border-dashed'>
                                            {data.brand}
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Model</td>
                                    <td className='decoration-gray-400 '>{(data.title).replace(data.brand,'')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-black col-span-2 w-full h-full'>
                        <div className='flex flex-col datas-center justify-center w-full h-full'>
                            <span className='text-lime-200 font-extrabold text-2xl'>{data.price + ` ZŁ`}</span>
                            <br/>
                            <button className='uppercase bg-blue-800 p-4 rounded-xl font-mono font-extrabold'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
