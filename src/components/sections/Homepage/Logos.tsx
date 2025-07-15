import { LOGOS } from "@/constants/data";
import Container from "../../ui/Container";
import Image from "next/image";

export default function Logos() {
	return (
		<Container>
			<section className="flex flex-wrap gap-8 items-center justify-between py-[5rem]">
				{LOGOS.map((img, id) => (
					<div
						key={id}
						className="lg:flex-1 flex items-center justify-center w-[40%]">
						<Image
							src={img.src}
							alt={img.alt}
							className="object-contain h-[60px] max-w-[70%] lg:max-w-full inline-block align-middle"
						/>
					</div>
				))}
			</section>
		</Container>
	);
}
