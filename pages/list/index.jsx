import Link from 'next/link';

export default function List(props) {

    console.log(props);

    const {ListOfItems} = props;

    return (
        <div>
            <h1>List Page</h1>
            <br />
            <ul className='text-3xl'>
                {
                    (ListOfItems && ListOfItems.length > 0 ? ListOfItems.map((item) => (
                        <Link key={item.id} href={`/list/${item.id}`}>
                            <li>
                                {item.label}
                            </li>
                        </Link>
                    )):null)
                }
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            ListOfItems: [
                {
                    id: '1',
                    label: 'List 1'
                },
                {
                    id: '2',
                    label: 'List 2'
                },
                {
                    id: '3',
                    label: 'List 3'
                }
            ]
        }
    }
}