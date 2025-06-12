import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouterNav from "./Router/RouterNav";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}
      <main className={`main-container ${user && 'mt-16 ml-12 md:ml-15'}`}>
        <RouterNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
