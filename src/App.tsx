import { BrowserRouter } from "react-router-dom";
import DotRing from "./components/DotRing/DotRing";
import Navigation from "./pages/Navigation";

function App() {

  // Custom Cursor Handler
  const cursorSmall = document.querySelector('.small') as HTMLElement;
  const positionElement = (e: any) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    //  @ts-ignore
    if (cursorSmall !== null) {
      cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  }
  window.addEventListener('mousemove', positionElement)

  // Reveal Function

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
     if (reveals[i].getBoundingClientRect().top < window.innerHeight - 100) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // Reveal Text Function

  function textEffect() {
    var text_left = document.querySelectorAll(".reveal_left");
    for (var i = 0; i < text_left.length; i++) {
      if (text_left[i].getBoundingClientRect().top < window.innerHeight - 20) {
        text_left[i].classList.add("text_left");
      } else {
        text_left[i].classList.remove("text_left");
      }
    }
  }

  window.addEventListener("scroll", textEffect);

  // Reveal Text Function

  function textEffect1() {
    var text_right = document.querySelectorAll(".reveal_right");
    for (var i = 0; i < text_right.length; i++) {
      if (text_right[i].getBoundingClientRect().top < window.innerHeight - 20) {
        text_right[i].classList.add("text_right");
      } else {
        text_right[i].classList.remove("text_right");
      }
    }
  }

  window.addEventListener("scroll", textEffect1);

  // Reveal Text Function

  function textEffect2() {
    var text_top = document.querySelectorAll(".reveal_top");
    for (var i = 0; i < text_top.length; i++) {
      if (text_top[i].getBoundingClientRect().top < window.innerHeight - 20) {
        text_top[i].classList.add("text_top");
      } else {
        text_top[i].classList.remove("text_top");
      }
    }
  }

  window.addEventListener("scroll", textEffect2);

  return (
    <div>
      <BrowserRouter>
        <DotRing />
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
