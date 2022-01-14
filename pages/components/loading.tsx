const LoadingAnimation = () => {
    return (
        <div className="loading-animation">
            <div className="loading-animation-icon">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image xlinkHref="/pp.webp" x="-25" width="150" height="100"></image>
                        </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"></polygon>
                </svg>
            </div>
        </div>
    );
};
export default LoadingAnimation;
