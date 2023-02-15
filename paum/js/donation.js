function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "100%",
    triggerElement: ".payment-details",
    triggerHook: 0.07,
  })

    .setPin(".payment-details")
    // .addIndicators()
    .addTo(controller);
}

if (screen.width >= 800) {
  splitScroll();
}
