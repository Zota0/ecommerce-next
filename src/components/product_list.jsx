import Link from 'next/link';
import Image from 'next/image';

const ListProduct = ({item}) => {

    const ProductThumbnail = item.thumbnail || 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=ais_user';

    const ProductLink = '/products/' + item.id || '/products/0';

    return (
        <div key={item.id} className="m-0 p-0 flex items-center justify-center align-middle w-full h-64"> 
            <div className="flex items-center justify-center align-middle w-full gap-0 h-full rounded-3xl bg-black text-white p-2">
                <div className='w-full h-full grid grid-cols-9 grid-rows-1 gap-0'>
                    <div className='bg-black col-span-3 w-full h-full'>
                        <Link href={ProductLink} className='w-full h-full'>
                            <img
                                src={ProductThumbnail}
                                alt={`Product image `+(item.id)+` - `+(item.title)}
                                className='w-full h-full object-contain'
                            />
                        </Link>
                    </div>
                    <div className='w-full h-full col-span-1'></div>
                    <div className='bg-black grid grid-rows-4 col-span-3 w-full h-full'>
                        <Link href={ProductLink}>
                            <h3 className='row-span-1 whitespace-nowrap text-2xl font-mono font-extrabold'>
                                {item.title}
                            </h3>
                        </Link>
                        <p className='row-span-1 text-[14px]'><span>{item.description}</span> {<Link className='whitespace-pre-wrap text-blue-600' href={ProductLink+'#description'}>Czytaj więcej</Link>}</p>
                        <table className='w-full h-full row-span-2'>
                            <tbody className='w-full h-full text-[12px]'>
                                <tr>
                                    <td className='font-bold'>Marka</td>
                                    <td className='decoration-white  decoration-dashed'>
                                        <Link href={`brands/${(item.brand)}`} className='border-b-2 border-b-white border-spacing-2 border-dashed'>
                                            {item.brand}
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Model</td>
                                    <td className='decoration-gray-400 '>{(item.title).replace(item.brand,'')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-black col-span-2 w-full h-full'>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <span className='text-lime-200 font-extrabold text-2xl'>{item.price + ` ZŁ`}</span>
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
