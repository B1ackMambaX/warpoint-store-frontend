type ButtonProps<T extends keyof JSX.IntrinsicElements> = {
    tag: T;
    image: string;
    text: string;
    width: number;
    height: number;
    fontSize: number;
    type?: 'submit'
} & JSX.IntrinsicElements[T];

export default ButtonProps;