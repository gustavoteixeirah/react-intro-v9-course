import { createRoot } from "react-dom";
import Pizza from "./Pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza name="pepper" description="lorem ipson" image={"/public/pizzas/pep_msh_pep.webp"} />
      <Pizza name="pepper" description="lorem ipson" image={"/public/pizzas/soppressata.webp"}/>
      <Pizza name="pepper" description="lorem ipson" image={"/public/pizzas/big_meat.webp"} />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
