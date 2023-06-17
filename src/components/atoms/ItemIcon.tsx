import classNames from "classnames";

interface Props {
	imgSrc: string;
	itemName: string;
	shouldFade?: boolean;
}

const ItemIcon = (props: Props) => {
	return (
		<img
			src={props.imgSrc}
			class={classNames([
				"w-full transition-opacity rendering-pixelated",
				props.shouldFade && "opacity-50",
			])}
			aria-label={props.itemName}
			title={props.itemName}
		/>
	);
};

export default ItemIcon;
