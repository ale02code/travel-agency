"use strict"
const videoAboutUs = document.querySelector('.video-about-us');

const observerAPI = new IntersectionObserver(verifyVisibility, {});
observerAPI.observe(videoAboutUs);

function verifyVisibility(entries) {
  let entry = entries[0];
  if (entry.isIntersecting) {
    // if the element is visible
    videoAboutUs.setAttribute("autoplay", "on");
  } else {
    // if the element is don't visible
    videoAboutUs.setAttribute("autoplay", "off");
  }
}