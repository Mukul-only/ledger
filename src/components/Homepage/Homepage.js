import Expenses from "./Expenses/Expenses";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Homepage = (props) => {
  return (
    <>
      <Navbar />
      <Expenses />
      <Footer />
    </>
  );
};
export default Homepage;
