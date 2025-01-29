gsap.to(".re-loading-logo", 2, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      gsap.to(".load-gird-box", 1, {
        opacity: 0,
        duration: 1,
        stagger: { amount: 0.5, from: "end", amount: 0.5 },
        onComplete: () => {
          gsap.set(".pixel-loading", { display: "none" });
        },
      });
    },
  });
  