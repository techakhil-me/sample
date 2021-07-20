import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navigation />
      <img
        className="person"
        src={require("./assets/person.png")}
        alt="person"
        draggable="false"
      />
      <Home />
    </>
  );
}
