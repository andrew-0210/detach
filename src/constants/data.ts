import BadenWurttemburg from "../app/assets/logos/baden.svg";
import JungeInnovatoren from "../app/assets/logos/junge.png";
import Hochschule from "../app/assets/logos/hochschule.svg";
import Finance from "../app/assets/logos/finance_accelerator.svg";
import StartupBW from "../app/assets/logos/startupBW.svg";
import SocialImpact from "../app/assets/logos/socialimpact.png";
import Arise from "../app/assets/logos/arise.png";

import appBlocker from "@/app/assets/appblockers.svg";
import snoozeStack from "@/app/assets/snooze-stack.svg";
import Challenges from "@/app/assets/win_challenges.svg";
import trackGoals from "@/app/assets/goal.svg";
import Community from "@/app/assets/community.svg";

type Navlinks = {
	label: string;
	href: string;
}[];

type Logos = {
	src: string;
	alt: string;
}[];

type Griddata = {
	label: string;
	description: string;
	featImg: string;
}[];

export const NAVLINKS: Navlinks = [
	{
		label: "Our Product",
		href: "/",
	},
	{
		label: "Workshop",
		href: "/workshop",
	},
	{
		label: "About us",
		href: "/about",
	},
];

export const LOGOS: Logos = [
	{
		src: BadenWurttemburg,
		alt: "Baden-Wurttemburg Logo",
	},
	{
		src: JungeInnovatoren,
		alt: "Junge Innovatoren Logo",
	},
	{
		src: Hochschule,
		alt: "Hochschule Der Medien Logo",
	},
	{
		src: Finance,
		alt: "Finance Accelerator Logo",
	},
	{
		src: StartupBW,
		alt: "StartupBW Logo",
	},
	{
		src: SocialImpact,
		alt: "Social Impact Logo",
	},
	{
		src: Arise,
		alt: "Arise Logo",
	},
];

export const GRIDDATA: Griddata = [
	{
		label: "App Blockers",
		description:
			"You're in control of your limits. Set blockers and tame the racoon in you.",
		featImg: appBlocker,
	},
	{
		label: "Collect snooze coins",
		description:
			"Collect snooze coins and use them for some extra screen-time or prizes.",
		featImg: snoozeStack,
	},
	{
		label: "Win challenges",
		description:
			"Prove your worth to yourself and others. Only the strongest Detacher will remain.",
		featImg: Challenges,
	},
	{
		label: "Track goals",
		description: "Set up your progress goals, stick to it, and achieve them.",
		featImg: trackGoals,
	},
	{
		label: "Community",
		description:
			"Prove your worth to yourself and others. Only the strongest Detacher will remain.",
		featImg: Community,
	},
];
