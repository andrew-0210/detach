import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import appleIcon from "@/app/assets/apple.svg";
import problemRacoon_1600up from "@/app/assets/racoons_problem_1600up.svg";
import problemRacoon_768 from "@/app/assets/racoons_problem_768.svg";

export default function Problems() {
	return (
		<section className="relative py-[3rem] h-screen flex flex-col  overflow-x-clip">
			<Image
				alt="problem"
				src={problemRacoon_1600up}
				className="object-cover z-[-10] hidden lg:inline-block"
				fill
			/>
			<div className="relative h-full w-full">
				<Image
					alt="problem"
					src={problemRacoon_768}
					className="object-cover z-[-10] lg:hidden inline-block"
					fill
				/>
			</div>

			<Container className="flex sm:items-start justify-end bg-[#adf7db] py-[3rem]  sm:bg-transparent">
				<div className="hero-content content-container ">
					<span className="outline-border">What's the problem?</span>
					<h1 className="hero-heading main-text">
						A little bit too much screentime.
					</h1>
					<p className="body-text">
						In {new Date().getFullYear()}, people around the world are spending
						about 4.5 hours a day on their smartphones. And according to
						surveys, 70% of us aren&apos;t too happy about it - most feel like a
						big chunk of that time is just wasted.
					</p>
					<Button>
						<span>
							<Image
								src={appleIcon}
								alt="Apple icon"
							/>
						</span>
						Get the App
					</Button>
				</div>
			</Container>
		</section>
	);
}
