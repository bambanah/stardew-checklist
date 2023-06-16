interface Props {
	itemName: string;
	iconPath?: string;
}

const ItemIcon = (props: Props) => {
	const url = () => {
		if (props.iconPath?.startsWith("/")) return `/images/${props.iconPath}`;

		return `/images/items/${
			props.iconPath ?? props.itemName.replaceAll(" ", "_")
		}.png`;
	};

	return (
		<img
			src={url()}
			class="w-full max-w-[48px]"
			aria-label={props.itemName}
			title={props.itemName}
		/>
	);
};

export default ItemIcon;
