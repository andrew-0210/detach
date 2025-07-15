import Image from "next/image";
import detachLogo from "../../app/assets/detach_logo.svg";

import Container from "../ui/Container";
import NavLinks from "./Navlinks";

export default function Navbar() {
	return (
		<header>
			<Container>
				<nav className="navigation">
					<Image
						src={detachLogo}
						alt="detach logo"
						className="w-[8rem] md:w-auto"
					/>
					<NavLinks />
				</nav>
			</Container>
		</header>
	);
}
