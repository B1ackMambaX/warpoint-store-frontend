import HeadingProps from "./HeadingProps"

import './heading.scss';

const Heading = ({children, className}: HeadingProps) => {
    return (
        <h2 className={`heading bebas ${className ? className : ''}`}>{children}</h2>
    )
}

export default Heading