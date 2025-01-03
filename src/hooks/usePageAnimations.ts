import { useEffect } from "react";
import { animate, stagger, inView } from "motion";

export const usePageAnimations = () => {
  useEffect(() => {
    // Initial mount animations
    const initialAnimations = async () => {
      // Hero section
      await animate(
        ".hero-title",
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1.2, delay: 0.2, easing: "ease-out" }
      );

      await animate(
        ".hero-text",
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, delay: 0.2, easing: "ease-out" }
      );

      await animate(
        ".hero-button",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: 0.2, easing: "ease-out" }
      );

      // Animate all section headers immediately
      const headers = document.querySelectorAll(".section-header");
      headers.forEach((header, index) => {
        animate(
          header,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.8, delay: 0.2 * index, easing: "ease-out" }
        );
      });
    };

    initialAnimations();

    // Scroll-triggered animations
    const scrollAnimations = [
      // About section
      inView(
        "#about .section-container",
        (info) => {
          animate(
            info.target.querySelectorAll(".about-paragraph"),
            { opacity: [0, 1], y: [20, 0] },
            {
              duration: 0.6,
              delay: stagger(0.2),
              easing: "ease-out",
            }
          );

          animate(
            info.target.querySelector(".about-image"),
            { opacity: [0, 1], scale: [0.9, 1] },
            {
              duration: 0.8,
              delay: 0.4,
              easing: "ease-out",
            }
          );
        },
        { margin: "-5%", amount: 0.5, once: true }
      ),

      // Services section
      inView(
        "#services .section-container",
        (info) => {
          animate(
            info.target.querySelector(".section-subtitle"),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, easing: "ease-out" }
          );
        },
        { margin: "-5%", amount: 0.5, once: true }
      ),

      // Work section
      inView(
        "#work .section-container",
        (info) => {
          animate(
            info.target.querySelector(".section-subtitle"),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, easing: "ease-out" }
          );
        },
        { margin: "-5%", amount: 0.5, once: true }
      ),

      // Contact section
      inView(
        "#contact .section-container",
        (info) => {
          animate(
            info.target.querySelector(".section-subtitle"),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, easing: "ease-out" }
          );
        },
        { margin: "-5%", amount: 0.5, once: true }
      ),
    ];

    // Cleanup function
    return () => {
      scrollAnimations.forEach((animation) => animation.stop());
    };
  }, []);
};
