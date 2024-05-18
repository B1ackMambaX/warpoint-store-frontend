import ButtonProps from "./ButtonProps";

import './button.scss';

const Button = <T extends keyof JSX.IntrinsicElements>({tag, text, image, width, height, fontSize }: ButtonProps<T>) => {
  const Tag = tag as React.ElementType;
  return (
    <Tag 
      className ="button" 
      style={{ 
          backgroundImage: `url(${image})`,
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`,
      }}>
        {text}
    </Tag>
  )
}

export default Button