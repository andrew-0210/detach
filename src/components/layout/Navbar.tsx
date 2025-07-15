import Image from "next/image";
import detachLogo from "@/app/assets/detach_logo.svg";

import Container from "@/components/ui/Container";
import NavLinks from "./Navlinks";
import Link from "next/link";

export default function Navbar() {
	return (
		<header>
			<Container>
				<nav className="navigation">
					<Link href="/">
						<Image
							src={detachLogo}
							alt="detach logo"
							className="w-[8rem] md:w-auto"
						/>
					</Link>
					<NavLinks />
				</nav>
			</Container>
		</header>
	);
}
