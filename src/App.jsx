import { useState } from "react";
import Heading from "./components/Heading";
// import { Container } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Heading className="heading__display">
        Premium hub for african talents.
      </Heading>
      <Heading size={2}>Premium hub for african talents.</Heading>
      <Heading size={3}>Premium hub for african talents.</Heading>
      <Heading size={4}>Hafrikplay web play kick-off</Heading>
      <Heading size={5}>Hafrikplay web play kick-off</Heading>
      <Heading size={6}>Hafrikplay web play kick-off</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio tenetur
        blanditiis, quam numquam ab sequi quasi fugiat iusto, quod obcaecati
        incidunt animi sint aliquid reiciendis itaque excepturi quos minus in.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
        quasi excepturi dolor id est adipisci obcaecati molestias voluptatibus
        quod temporibus quo, delectus unde dolorum accusantium ex officiis hic
        natus exercitationem?
      </p>
    </div>
  );
}

export default App;
