import Hero from "@/components/sections/Homepage/Hero";
import HowItWorks from "@/components/sections/Homepage/HowItWorks";
import Logos from "@/components/sections/Homepage/Logos";
import Problems from "@/components/sections/Homepage/Problems";

export default function Home() {
	return (
		<main>
			<Hero />
			<Logos />
			<HowItWorks />
			<Problems />
		</main>
	);
}
