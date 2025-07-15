import Image from "next/image";
import Button from "../ui/Button";
import heroImage from "../../app/assets/hero.png";
import appleIcon from "../../app/assets/apple.svg";
import Container from "../ui/Container";

export default function Hero() {
	return (
		<Container>
			<section className="hero-section">
				<div className="hero-content content-container">
					<span className="outline-border">Ready to Detach?</span>
					<h1 className="hero-heading main-text">
						That screen glow isn&apos;t sunlight.
					</h1>
					<p className="body-text">
						Detach is your app to finally reduce your screen time. Win back 2
						hours a day and do mre things you will remember. Detach now for
						free!
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
				<div className="imageContainer">
					<Image
						src={heroImage}
						className="object-contain"
						alt="detach mobile screen prompting to take a break from the screen"
						priority
						fill
					/>
				</div>
			</section>
		</Container>
	);
}
