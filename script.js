/*let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("babycrying.mp3");
  audio.play()
}
play.addEventListener("click", playMusic);*/

/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}*/

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const data = {
    toileft2: {
      type: "slideshow",
      title: "Toileft #2, Thread, fabric, frame, tabletop, handle, screws, 1.8 ft x 3.3 ft x 4 in, 2026",
      description: "Hand-embroidery of a digital file used for a pen plotter. Made from secondhand materials.",
      images: [
        "images toileft/toileft4.jpg",
        "images toileft/toileft5.jpg",
        "images toileft/toileft6.jpg",
      ]
    },
    toileft1: {
      type: "slideshow",
      title: "Toileft #1, Thread, fabric, frame, tiles, drywall, grout, 2 ft x 2 ft x 2 in, 2026",
      description: "Hand-embroidery of a digital file used for a pen plotter. Thread, fabric, frame and tiles are secondhand materials.",
      images: [
        "images toileft/toileft1.jpg",
        "images toileft/toileft2.jpg",
        "images toileft/toileft3.jpg",
      ]
    },
    laptop: {
      type: "slideshow",
      title: "MacBook 13 inch 2023, Fabric, thread, mattresses, textile paint, 3.3ft x 4.75ft, 2026",
      images: [
        "images/laptop0.jpg",
        "images/laptop1.jpg",
        "images/laptop2.jpg",
      ]
    },
    bird: {
      type: "slideshow",
      title: "Do You Have a Bird?, Neon, 2025",
      description: "I do! Do you?",
      images: [
        "images/do_you_have_a_bird.jpg",
      ]
    },
    glass: {
      type: "slideshow",
      title: "Forbidden Fruit, Blown glass, Various sizes, 2024",
      description: "Seven glass objects, blown by hand, three of which can be illuminated.",
      images: [
        "images glass/cherry.jpg",
        "images glass/apple.jpg",
        "images glass/tomato.jpg",
        "images glass/raspberry.jpg",
        "images glass/banana.jpg",
        "images glass/cigarette.jpg",
        "images glass/self.jpg",
      ]
    },
    /*vapeme: {
      type: "slideshow",
      title: "Vape Me, 2023",
      description: "Fully functional vape toy.",
      images: [
        "images vapeme/vape.jpg",
        "images vapeme/IMG_7894.png",
        "images vapeme/vapevideo.gif",
      ]
    },*/
    shitdiaries: {
      type: "slideshow",
      title: "Shit Diaries, Plastic toilet, paper, glue, wool, 2024",
      description: "Toilet book containing eleven images of poop with an accompanying text written while sitting on the toilet.",
      images: [
        "images/shitdiaries1.jpg",
        "images shitdiaries/shitdiaries2.jpg",
        "images shitdiaries/shitdiaries3.jpg",
        "images shitdiaries/ezgif.com-video-to-gif-converter copy.gif",
      ]
    },
    myqueen: {
      type: "slideshow",
      title: "My Queen, wood, screws, glue, fabric, thread, 2024",
      description: "Functional chair, life-sized doll sewn out of thrifted scarfes.",
      images: [
        "images/myqueen.jpg",
        "images myqueen/myqueen2.jpg",
        "images myqueen/myqueen3.jpg",
      ]
    },
    unhinged1: {
      type: "slideshow",
      title: "Unhinged #1, Acrylic on wood, 21 x 29 x 1.5 inches, 2026",
      images: [
        "images/unhinged1.jpg",
      ]
    },
    fly: {
      type: "slideshow",
      title: "Fly on the Wall, Acrylic on canvas, 32 x 32 inches, 2025",
      description: "",
      images: [
        "images/flyonthewall.jpg",
      ]
    },
    tindead: {
      type: "slideshow",
      title: "Tindead, Acrylic on canvas, 59 x 33 inches, 2025",
      description: "",
      images: [
        "images/tindead.jpg",
        "images tindead/Tindead1.jpg",
        "images tindead/Tindead2.jpg",
        "images tindead/Tindead3.jpg",
        "images tindead/Tindead4.jpg",
        "images tindead/Tindead5.jpg",
        "images tindead/Tindead6.jpg",
        "images tindead/Tindead7.jpg",
        "images tindead/Tindead8.jpg",
        "images tindead/Tindead9.jpg",
        "images tindead/Tindead10.jpg",
      ]
    },
    whole: {
      type: "slideshow",
      title: "(W)hole, Acrylic on canvas, 20 x 20 inches, 2025",
      description: "",
      images: [
        "images/wholes.jpg",
      ]
    },
    byebike: {
      type: "slideshow",
      title: "Bye Bike!, Acrylic on canvas, 24 x 18 inches, 2025",
      description: "",
      images: [
        "images/byebike.jpg",
      ]
    },
    stilllifewithbaby: {
      type: "slideshow",
      title: "Still Life with Baby, Acrylic on canvas, 24 x 18 inches, 2025",
      description: "",
      images: [
        "images/still_life.jpg",
      ]
    },
    metwo: {
      type: "slideshow",
      title: "Me Two, Acrylic on canvas, 2025",
      description: "",
      images: [
        "images/me_two.jpg",
      ]
    },
    /*portraits: {
      type: "slideshow",
      title: "Portraits of a Conteporary Woman/Testaments of a Modern Corpse, Gelatin silver prints, 2025",
      description: "",
      images: [
        "images/portraits_full.jpg",
      ]
    },
    tammey2: {
      type: "slideshow",
      title: "Tamm(e)y #2, Gelatin silver prints, 2025",
      description: "",
      images: [
        "images/tammey.jpg",
      ]
    },*/
    /*gywhaa: {
      type: "slideshow",
      title: "Glad You Were Here At All, Digital photographs, 2024",
      description: "",
      images: [
        "images/gladyouwerehereatall.jpg",
      ]
    },
    windows: {
      type: "slideshow",
      title: "Windows, Digital photographs, 2024",
      description: "",
      images: [
        "images/windows.jpg",
        "images windows/windows1.jpg",
        "images windows/windows2.jpg",
        "images windows/windows3.jpg",
        "images windows/windows4.jpg",
        "images windows/windows5.jpg",
      ]
    },*/
    screentime: {
      type: "video",
      title: "Screentime 8h30, Original Video: 8:32:28, Shortened Video: 00:02:58, 2026",
      description: "Performed for one night only in Berlin on MacBook 13 inch 2023.",
      youtubeId: "rSublR_3_HI",
    },
    wullenwebersteg: {
      type: "video",
      title: "Wullenwebersteg, Virtual Reality, In collaboration with Carlota Alvarez, 2025-",
      description: "Work in progress.",
      youtubeId: "9OnogR4DeUA",
    },
    radiops: {
      type: "slideshow",
      title: "Radiops, Performance, Duration: 10 minutes, 2025",
      description: "",
      images: [
        "images radiops/radiops1.jpeg",
        "images radiops/radiops2.jpeg",
        "images radiops/radiops3.jpeg",
        "images radiops/radiops4.jpeg",
        "images radiops/radiops5.jpeg",
        "images radiops/radiops6.jpeg",
        "images radiops/radiops7.jpeg",
        "images radiops/radiops8.jpeg",
        "images radiops/radiops9.jpeg",
        "images radiops/radiops10.jpeg",
      ]
    },
    /*breakfast: {
      type: "video",
      title: "Breakfast, Performance with Sabine Pierce Jones and Dani Castro, 2025",
      description: "",
      video: "videos/Performance_breakfast_short.mp4",
      poster: "images/breakfast_thumb.jpg"
    },*/
    printed: {
      type: "video",
      title: "Printed, Performance, Video: 00:06:16, 2025",
      description: "",
      youtubeId: "Aq2wSvAFEFM",
    },
    /*tammey: {
      type: "video",
      title: "Tamm(e)y #1, Performance, 2024",
      description: "",
      youtubeId: "zU4PhvynzT0"
    },*/
    wheresmybike: {
      type: "video",
      title: "Where's my bike?, Performance, Original Video: 00:19:33, Shortened, 2024",
      description: "",
      youtubeId: "ShjGAhNQqhc",
    },
    ellemesuit: {
      type: "video",
      title: "Elle me suit, 3D animation, Video: 00:01:59, 2023",
      description: "",
      youtubeId: "MNHda6Zs9CI",
    },
  };


  const workOrder = Object.keys(data);
  const titleElem = document.getElementById("title");
  const descElem = document.getElementById("desc");
  const mediaContainer = document.getElementById("media");

  if (!id || !data[id]) {
    titleElem.textContent = "Media not found.";
    return;
  }

  const entry = data[id];
  titleElem.textContent = entry.title;
  descElem.textContent = entry.description;

  const currentIndex = workOrder.indexOf(id);

  const prevBtn = document.querySelector(".detail-prev");
  const nextBtn = document.querySelector(".detail-next");

  if (prevBtn && nextBtn) {
    // Previous work
    prevBtn.addEventListener("click", () => {
      const prevIndex =
        (currentIndex - 1 + workOrder.length) % workOrder.length;
      const prevId = workOrder[prevIndex];
      window.location.href = `image.html?id=${prevId}`;
    });

    // Next work
    nextBtn.addEventListener("click", () => {
      const nextIndex =
        (currentIndex + 1) % workOrder.length;
      const nextId = workOrder[nextIndex];
      window.location.href = `image.html?id=${nextId}`;
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      document.querySelector(".detail-prev")?.click();
    }
    if (e.key === "ArrowRight") {
      document.querySelector(".detail-next")?.click();
    }
  });

  if (entry.type === "slideshow") {
    const slideshowContainer = document.createElement("div");
    slideshowContainer.className = "slideshow-container";

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots";

    entry.images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = "mySlides fade";
      
      slide.innerHTML = `<img src="${src}" alt="slide ${index + 1}">`;
      slideshowContainer.appendChild(slide);

      const img = slide.querySelector("img");
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      const dot = document.createElement("span");
      dot.className = "dot";
      dot.setAttribute("data-index", index + 1);
      dot.addEventListener("click", function () {
        currentSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsContainer.appendChild(dot);
    });

    if (entry.images.length > 1) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "slide-prev";
      prevBtn.innerHTML = "‹";

      const nextBtn = document.createElement("button");
      nextBtn.className = "slide-next";
      nextBtn.innerHTML = "›";

      prevBtn.addEventListener("click", () => {
        showSlides(--slideIndex);
      });

      nextBtn.addEventListener("click", () => {
        showSlides(++slideIndex);
      });

      slideshowContainer.appendChild(prevBtn);
      slideshowContainer.appendChild(nextBtn);
    }

    mediaContainer.appendChild(slideshowContainer);

    if (entry.images.length > 1) {
      mediaContainer.appendChild(dotsContainer);
    }

    showSlides(slideIndex);
  }

  if (entry.type === "video") {
    mediaContainer.classList.remove("slideshow-container");

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${entry.youtubeId}`;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy"; // IMPORTANT for performance

    const wrapper = document.createElement("div");
    wrapper.className = "video-wrapper";

    wrapper.appendChild(iframe);
    mediaContainer.appendChild(wrapper);

    return;
  }


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
  }
});

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

if (hamburger && sidebar) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');
const formStatus = document.querySelector(".form-status");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      formStatus.textContent = "Thank you! Your message has been sent.";
      formStatus.className = "form-status success";
      submitBtn.textContent = "Sent ✓";
      form.reset();
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.className = "form-status";
      }, 5000);
    } else {
      formStatus.textContent = data.message || "Something went wrong.";
      formStatus.className = "form-status error";
    }

  } catch (error) {
    formStatus.textContent = "Something went wrong. Please try again.";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
