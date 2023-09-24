"use strict"
const videoAboutUs = document.querySelector('.video-about-us');

const observerAPI = new IntersectionObserver(verifyVisibility, {});
observerAPI.observe(videoAboutUs);

function verifyVisibility(entries) {
  let entry = entries[0];
  if (entry.isIntersecting) {
    videoAboutUs.setAttribute("autoplay", "on");
  } else {
    videoAboutUs.setAttribute("autoplay", "off");
  }
}