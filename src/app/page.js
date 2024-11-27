import Explore from "./components/explore/page";
import Hero from "./components/hero/page";
import Testimonial from "./components/Testimonial/page";

export default function Home() {
  return (
    <div className="">
      <main>
       <Hero />
       <Explore />
       <Testimonial />
      </main>
    </div>
  );
}
