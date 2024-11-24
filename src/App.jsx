import Header from "./components/Header";
import Slider from "./components/Slider";
import HomeContent from "./components/HomeContent";
import RecentlyBought from "./components/RecentlyBought";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  
  return (
    <>
        <ShoppingCart>
          <section className='headersect'><Header></Header></section>
          <section className="sliderSect"><Slider></Slider></section>
          <HomeContent></HomeContent>
            <RecentlyBought/>
        </ShoppingCart>
    </>
  )
}

export default App
