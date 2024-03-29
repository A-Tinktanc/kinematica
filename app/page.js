import News from "./components/Home/News";
import Products from "./components/Home/Products";
import SuccessStories from "./components/Home/SuccessStories";
import TextContainer from "./components/Home/TextContainer";


export default function Home() {
  return (
    <>
  
  <div className="overflow-hidden"> 

      <TextContainer />
      <News />
      <Products />
      <SuccessStories />
  </div>
    </>
  );
}
