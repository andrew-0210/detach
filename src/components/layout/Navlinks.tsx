"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../ui/Button";
import { useState } from "react";
import appleIcon from "../../app/assets/apple.svg";
import { NAVLINKS } from "@/constants/data";
import Links from "../ui/Links";
import Image from "next/image";

export default function NavLinks() {
	const [isOpen, setIsOpen] = useState(false);

	function menuHandler() {
		setIsOpen((prev) => !prev);
	}

	function handleLinkClick() {
		setIsOpen(false);
	}
	return (
		<>
			<div className="lg:hidden">
				<Button buttonHandler={menuHandler}>
					<AiOutlineMenu size={24} />
				</Button>
			</div>
			<div className="hidden lg:flex items-center gap-8">
				<ul className="navlinks">
					{NAVLINKS.map((link, id) => (
						<li key={id}>
							<Links
								href={link.href}
								label={link.label}
							/>
						</li>
					))}
				</ul>
				<Button>
					<span className="flex items-center gap-2">
						<Image
							src={appleIcon}
							alt="Apple icon"
							width={20}
							height={20}
						/>
						Get the App
					</span>
				</Button>
			</div>
			{/* Mobile menu */}
			<div
				className={`
				lg:hidden
				fixed top-0 left-0 w-full h-full
				bg-[#2a2a2a/40] z-50
				transition-all duration-300 ease-in-out
				${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
			`}>
				<div
					className={`
					bg-white shadow-lg h-dvh 
					transform transition-transform duration-300 ease-in-out
					${isOpen ? "translate-y-0" : "-translate-y-full"}
				`}>
					{/* Mobile Menu Header */}
					<div className="flex justify-end items-center p-4 ">
						<Button
							buttonHandler={menuHandler}
							className="p-2">
							<AiOutlineClose size={24} />
						</Button>
					</div>

					{/* Mobile Menu Content */}
					<div className="px-[1.5rem] flex gap-[4rem] flex-col items-start justify-between">
						<ul className="navlinks">
							{NAVLINKS.map((link, id) => (
								<li key={id}>
									<div onClick={handleLinkClick}>
										<Links
											href={link.href}
											label={link.label}
										/>
									</div>
								</li>
							))}
						</ul>

						<Button>
							<span className="flex items-center justify-center gap-2">
								<Image
									src={appleIcon}
									alt="Apple icon"
									width={20}
									height={20}
								/>
								Get the App
							</span>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
