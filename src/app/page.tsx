import Nav from "./components/nav";
import Banner from "./components/banner";
import Carousel from "./components/carousel";
import Progressor from "./components/progressor";
import Product from "./components/product";
import Menuitem from "./components/menuitem";
import OfferList from "./components/offer";
import Card from "./components/card";
import Reservation from "./components/reservation";
import Footer from "./components/footer";



export default function Home() {
  return (
<div  className="bg-slate-800">
<Nav/>
<Carousel/>
<Progressor/>
<Product/>
<Banner/>
<Menuitem/>
<OfferList/>
<Card/>
<Reservation/>
<Footer/>
</div>
  );
}
