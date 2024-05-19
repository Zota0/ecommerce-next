import Link from "next/link";
import Image from "next/image";

const HeaderElement = () => {

	const PAGE_NAME = process.env.NEXT_PUBLIC_PAGE_NAME || 'Page name';
	const PAGE_NAME_HEADER_STYLES = process.env.NEXT_PUBLIC_PAGE_NAME_HEADER_STYLES || 'text-[40px] font-extrabold uppercase select-none';

	return (
		<header className="fixed flex w-screen h-24 max-h-24 min-h-24 overflow-hidden justify-center align-middle items-center bg-black header">
			<div className="flex w-full h-full justify-center align-middle items-center pr-8 pl-4 py-2">
				<div title={PAGE_NAME} className="w-3/12 h-full">
					<span  className="relative top-[10%] h-full w-full">
						<span className={PAGE_NAME_HEADER_STYLES}>{PAGE_NAME}</span>
					</span>
				</div>
				<div className="w-7/12 h-full">
					<div class>
						<div className="px-36 sm:w-full h-full sm:px-24 overflow-hidden">
							<ul className="font-bold w-full h-full flex flex-row justify-between gap-x-[5px] align-middle items-center text-center sm:gap-x-0">
								<li className="h-full w-2/6 flex">
									<Link className="h-full w-full" href="/">
										<span className="relative top-[35%] block h-full w-full uppercase">Strona główna</span>
									</Link>
								</li>
								<li className="h-full w-2/6 flex">
									<Link className="h-full w-full" href="/products">
										<span className="relative top-[35%] block h-full w-full uppercase">Produkty</span>
									</Link>
								</li>
								<li className="h-full w-2/6 flex">
									<Link className="h-full w-full" href="/about-me">
										<span className="relative -left-[20%] top-[35%] block h-full w-full uppercase">O mnie</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="h-full w-2/12">
					<div className="w-full h-full flex flex-row justify-center gap-x-16 align-middle items-center">
						<Image
							src="/static/konto.svg"
							alt="Account"
							width={256}
							height={256}
							className="w-12 h-12 m-0 p-0"
						/>
						<Image
							src="/static/cart.svg"
							alt="Cart"
							width={256}
							height={256}
							className="w-12 h-12 m-0 p-0"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderElement;