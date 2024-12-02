document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("jason");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("jackson");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("aidan");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("vincent");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("kishan");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("process-card");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("app-card");
  observer.observe(target);
});

function copyToClipboard(selector, elementIndex) {
  var element = document.querySelectorAll(selector)[elementIndex];
  var tempInput = document.createElement("input");
  tempInput.value = element.innerText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  Swal.fire({
    title: "Copied!",
    text: "Text copied to clipboard: " + element.innerText,
    icon: "success",
    confirmButtonText: "OK",
  });
}

// Mobile
function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}
