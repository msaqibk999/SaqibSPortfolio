import React, { useEffect, useRef } from "react";
import { m, LazyMotion, domAnimation, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "100vw", background = "#FFB400", isSlider = false, overflow = "hidden", duration = 0.2 }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = React.useState(false);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <LazyMotion features={domAnimation}>
            <div ref={ref} style={{ position: "relative", width, overflow }}>
                <m.div
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration, delay: 0.25 }}
                >
                    {children}
                </m.div>

                {isSlider ? (
                    <m.div
                        variants={{
                            hidden: { left: 0 },
                            visible: { left: "100%" }
                        }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        style={{
                            position: "absolute",
                            top: 4,
                            bottom: 4,
                            left: 0,
                            right: 0,
                            background,
                            zIndex: 20
                        }}
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </LazyMotion>
    );
};
