import Image from "next/image";
import Container from "../../ui/Container";

import { GRIDDATA } from "@/constants/data";

export default function HowItWorks() {
	return (
		<Container>
			<section className="work-container">
				<div className="content-container work-content mb-[3.5rem]">
					<span className="outline-border">How does it work?</span>
					<h2 className="main-text">Doomscrolling vs Goodscrolling.</h2>
					<p className="body-text text-center">
						Social media is incredibly fun, in moderate quantities. Our features
						are built to establish a healthier digital lifestyle. We believe in
						self control, rather than total abstinence.
					</p>
				</div>

				<div className="flex flex-col md:grid auto-cols-fr sm:grid-cols-2 lg:grid-cols-3 gap-[1.25rem] grid-rows-[auto_auto] max-h-fit">
					{GRIDDATA.map((item, id) => (
						<div
							className={`bg-[#faf9fa] flex flex-col items-stretch justify-start rounded-[24px]   flex-1 ${
								id === 0 ? "row-span-2 " : ""
							}`}
							key={id}>
							<div className="px-[1.5rem] pt-[2rem] pb-[1.25rem]">
								<h3 className="text-[1.5rem] font-semibold mb-[14px]">
									{item.label}
								</h3>
								<p className="text-[1rem] md:text-[1.125rem] font-medium">
									{item.description}
								</p>
							</div>
							<div className="relative h-auto flex flex-1 items-stretch justify-center pb-[1.5rem]">
								<Image
									src={item.featImg}
									alt="some image"
									className="object-contain align-middle max-w-full inline-block"
								/>
							</div>
						</div>
					))}
				</div>

			</section>
		</Container>
	);
}

