interface Props {
	itemName: string;
}

const ItemIcon = (props: Props) => {
	return (
		<img
			src={`/images/items/${props.itemName}.png`}
			class="w-full max-w-[48px]"
			aria-label={props.itemName}
			title={props.itemName}
		/>
	);
};

export default ItemIcon;
