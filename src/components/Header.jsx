import Link from "next/link";
import Image from "next/image";

const HeaderElement = () => {

	const PageName = process.env.NEXT_PUBLIC_PAGE_NAME;

	return (
		<header className="fixed flex w-screen h-24 max-h-24 min-h-24 overflow-hidden bg-black justify-center align-middle items-center">
			<div className="flex w-full h-full justify-center align-middle items-center px-8 py-2">
				<div className="w-3/12 h-full">
					<span title={PageName} className="relative top-[10%] h-full w-full text-[40px] font-extrabold uppercase select-none">{PageName}</span>
				</div>
				<div className="w-7/12 h-full">
					<div className="w-full h-full">
						<ul className="font-bold w-full h-full flex flex-row justify-between gap-x-0.5 align-middle items-center relative top-[35%]">
							<li className="h-full w-1/3 flex">
								<Link className="h-full w-full" href="/">
									<span className="block h-full w-full uppercase">Strona główna</span>
								</Link>
							</li>
							<li className="h-full w-1/3">
								<Link className="h-full w-full" href="/products">
									<span className="block h-full w-full uppercase">Produkty</span>
								</Link>
							</li>
							<li className="h-full w-1/3">
								<Link className="h-full w-full" href="/about-me">
									<span className="block h-full w-full uppercase">O mnie</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="h-full w-3/12">
					<div className="w-full h-full flex flex-row justify-center gap-x-16 align-middle items-center">
						<Image
							src="/static/konto.svg"
							alt="Account"
							width={64}
							height={64}
							className="w-8 h-8"
						/>
						<Image
							src="/static/cart.svg"
							alt="Cart"
							width={64}
							height={64}
							className="w-8 h-8"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderElement;