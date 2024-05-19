interface CartItemProps {
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    onIncrement?: (_: any) => void;
    onDecrement?: (_: any) => void;
    onDelete?: (_: any) => void;
}

export default CartItemProps;