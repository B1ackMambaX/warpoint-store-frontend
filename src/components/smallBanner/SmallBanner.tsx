import './smallBanner.scss';

const SmallBanner = ({ isBlack }: { isBlack?: boolean }) => {
    return (
        <article className="small-banner">
            <div className={isBlack ? "small-banner__top small-banner__top_black" : "small-banner__top"}>
                <span className={isBlack ? "small-banner__heading bebas small-banner__heading_black" : "small-banner__heading bebas"}>МЕРЧ</span>
                <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_97_231)">
                        <path d="M6.66602 29.4695C9.42744 29.4695 11.666 26.8307 11.666 23.5756C11.666 20.3204 9.42744 17.6816 6.66602 17.6816C3.90459 17.6816 1.66602 20.3204 1.66602 23.5756C1.66602 26.8307 3.90459 29.4695 6.66602 29.4695Z" fill={isBlack ? "#FBFBFB" : "#1B1B1B"}/>
                        <path d="M20 29.4695C22.7614 29.4695 25 26.8307 25 23.5756C25 20.3204 22.7614 17.6816 20 17.6816C17.2386 17.6816 15 20.3204 15 23.5756C15 26.8307 17.2386 29.4695 20 29.4695Z" fill={isBlack ? "#FBFBFB" : "#1B1B1B"}/>
                        <path d="M33.334 29.4695C36.0954 29.4695 38.334 26.8307 38.334 23.5756C38.334 20.3204 36.0954 17.6816 33.334 17.6816C30.5726 17.6816 28.334 20.3204 28.334 23.5756C28.334 26.8307 30.5726 29.4695 33.334 29.4695Z" fill={isBlack ? "#FBFBFB" : "#1B1B1B"}/>
                    </g>
                </svg>
            </div>

            <div className={isBlack ? "small-banner__content small-banner__content_black" : "small-banner__content"}></div>

            <div className={isBlack ? "small-banner__footer small-banner__footer_black" : "small-banner__footer"}>
                <span className={isBlack ? "small-banner__footer-text bebas small-banner__footer-text_black" : "small-banner__footer-text bebas"}>WARPOINTSTORE</span>
            </div>
        </article>
    )
}

export default SmallBanner;