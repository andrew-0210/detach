import Button from "@/components/ui/Button";
s

import Container from "@/components/ui/Container";

export default function WorkshopHero() {
	return (
		<Container>
			<section className="hero-section">
				<div className="hero-content content-container">
					<span className="outline-border">Detach for your team</span>
					<h1 className="hero-heading main-text">
						Let&apos;s get to work(shop).
					</h1>
					<p className="body-text">
						Your team struggles with phone usage? Say no more. The Detach
						workshop helps your team regain control over their time.
					</p>
					<Button>Organize workshop</Button>
				</div>
			</section>
		</Container>
	);
}
