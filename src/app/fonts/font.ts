import localFont from "next/font/local";

export const nexaRound = localFont({
	src: [
		{
			path: "./nexaround/nexaround-book.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./nexaround/nexaround-regular.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./nexaround/nexaround-bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./nexaround/nexaround-extrabold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./nexaround/nexaround-heavy.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./nexaround/nexaround-black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-nexaround",
});
