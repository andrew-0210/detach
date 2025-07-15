type ButtonProps = {
	children?: React.ReactNode;
	className?: string;
	buttonHandler?: () => void;
};

export default function Button({
	children,
	className,
	buttonHandler,
}: ButtonProps) {
	return (
		<button
			className={`primary-button ${className}`}
			onClick={buttonHandler}>
			{children}
		</button>
	);
}
