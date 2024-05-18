import HeadingProps from "./HeadingProps"

import './heading.scss';

const Heading = ({children}: HeadingProps) => {
    return (
        <h2 className="heading bebas">{children}</h2>
    )
}

export default Heading