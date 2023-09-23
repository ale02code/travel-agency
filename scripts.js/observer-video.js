"use strict"

const video = document.querySelector(".video-about-us");

const addAtribute = entry => {
  if (entry[0].isIntersecting) video.add ;
}

const observer = new IntersectionObserver();