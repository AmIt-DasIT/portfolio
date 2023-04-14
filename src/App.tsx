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
    if(cursorSmall !== null) {
      cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  }
  window.addEventListener('mousemove', positionElement)


  // Reveal Function

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

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
