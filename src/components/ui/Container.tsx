import cn from "clsx";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className }: ContainerProps) {
	return <section className={cn("container", className)}>{children}</section>;
}
