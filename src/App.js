import About from "./components/About";
import Another from "./components/Another";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollProvider } from "./components/GlobalState";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ScrollProvider>
      <NavBar />
      <Main />
      <Another />
      <About />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;
