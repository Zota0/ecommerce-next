import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
		<div className="fixed w-full bg-black flex justify-between items-center align-middle px-4 mx-4 h-12 overflow-hidden">
			<header className="h-full w-full flex justify-between items-center align-middle px-4 mx-0 flex-row">
				<h5 className="w-2/6 font-extrabold text-lg ml-6">Page Name</h5>
				<div className="w-1/3">
					<div className="w-3/6">
						<ul className="flex items-center justify-between gap-x-8 flex-row text-[24px] font-bold">
							<li>
								<Link className="pr-4 mr-4" href="/">
									<span className="uppercase">Strona główna</span>
								</Link>
							</li>
							<li>
								<Link className="px-4 mx-4 uppercase" href="/products">
									<span className="uppercase">Produkty</span>
								</Link>
							</li>
							<li>
								<Link className="pl-4 ml-4 uppercase" href="/about-me">
									<span className="uppercase">O mnie</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-1/6">
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
			</header>
		</div>

	);
}

export default Header;