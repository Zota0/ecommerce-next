import Link from "next/link";
import Image from "next/image";

const HeaderElement = () => {

	const PAGE_NAME = process.env.NEXT_PUBLIC_PAGE_NAME || 'Page name';
	const PAGE_NAME_HEADER_STYLES = process.env.NEXT_PUBLIC_PAGE_NAME_HEADER_STYLES || 'text-[36px] font-extrabold uppercase select-none';

	return (
		<header className="fixed flex w-screen h-24 max-h-24 min-h-24 overflow-hidden justify-center align-middle items-center bg-black header">
			<div className="flex w-full h-full justify-center align-middle items-center pr-8 pl-4 py-2">
				<div title={PAGE_NAME} className="w-3/12 h-full">
					<span  className="relative top-[10%] h-full w-full">
						<span className={PAGE_NAME_HEADER_STYLES}>{PAGE_NAME}</span>
					</span>
				</div>
				<div className="w-7/12 h-full">
					<div className="md:w-[70%] sm:w-full h-full">
						<div className="h-full w-full overflow-hidden">
							<ul className="xl:px-12 font-bold w-full h-full flex flex-row justify-between align-middle items-center text-center sm:gap-x-0 text-[16px]">
								<li className="flex justify-center items-center content-center align-center h-full w-2/6]">
									<Link className="h-full w-full" href="/">
										<span className="relative top-[30%] h-full w-full uppercase text-nowrap">Strona główna</span>
									</Link>
								</li>
								<li className="flex justify-center items-center content-center align-center h-full w-2/6">
									<Link className="flex justify-center items-center h-full w-full" href="/products">
										<span className="relative top-[30%] h-full w-full uppercase text-nowrap">Produkty</span>
									</Link>
								</li>
								<li className="flex justify-center items-center content-center align-center h-full w-2/6 flex">
									<Link className="flex justify-center items-center h-full w-full" href="/about-me">
										<span className="relative top-[30%] h-full w-full uppercase text-nowrap">O mnie</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="h-full w-2/12">
					<div className="w-full h-full flex flex-row justify-center gap-2 align-middle items-center">
						<Link href={``} className="w-12 h-12 m-0 p-0">
							<Image
								src="/static/konto.svg"
								alt="Account"
								width={256}
								height={256}
								className="w-full h-full m-0 p-0"
							/>
						</Link>
						<Link href={``} className="w-12 h-12 m-0 p-0">
							<Image
								src="/static/cart.svg"
								alt="Cart"
								width={256}
								height={256}
								className="w-full h-full m-0 p-0"
							/>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderElement;
