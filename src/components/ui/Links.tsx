"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
	href: string;
	label: string;
};

export default function Links({ href, label }: LinkProps) {
	const pathname = usePathname();
	const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
	return (
		<Link
			href={href}
			className={`${isActive ? "active" : "inactive"}`}>
			{label}
		</Link>
	);
}
