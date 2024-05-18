import Link from "next/link";
import Image from "next/image";

const HeaderElement = () => {
    return (
		<header className="w-screen h-14 overflow-hidden fixed bg-black flex justify-between items-center flex align-middle px-4 mx-4">
			<div className="h-full w-full flex justify-between items-center align-middle px-4 mx-0 flex-row">
				<h5 className="w-2/12 h-full font-extrabold text-lg">Page Name</h5>
				<div className="w-7/12 h-full">
					<div className="w-full h-full">
						<ul className="flex items-center justify-between gap-x-2 flex-row text-[24px] font-bold">
							<li className="h-full w-full">
								<Link className="h-full w-full uppercase" href="/">
									<span className="uppercase">Strona główna</span>
								</Link>
							</li>
							<li className="h-full w-full">
								<Link className="h-full w-full uppercase" href="/products">
									<span className="uppercase">Produkty</span>
								</Link>
							</li>
							<li className="h-full w-full">
								<Link className="h-full w-full uppercase" href="/about-me">
									<span className="uppercase">O mnie</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="h-full w-3/12">
					<div className="w-full h-full flex justify-between items-center align-middle px-4 mx-0 flex-row gap-x-16">
						<Image
							src="konto.svg"
							alt="Account"
							width={64}
							height={64}
							className="w-8 h-8"
						/>
						<Image
							src="cart.svg"
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