import "./App.css";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-[#E5E7EB] flex justify-center items-center h-screen">
      <div>

        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-3xl font-bold">Our Testimonials</h1>
          <div className="w-28 h-[3px] bg-[#8B5CF6]"></div>
        </div>

        <div>
          <Testimonial />
        </div>
        
      </div>
    </div>
  );
}

export default App;
