import Svg from "../SVG/Svg";
import Card from "../UI/Card";
import plus from "../SVG/plus";
const Navbar = (props) => {
  return (
    <Card
      className={`flex justify-between items-center py-4 border-b border-stroke-light`}
    >
      <div />
      <h1 className="text-xl tracking-[14px] text-primary-100">EXPENSES</h1>
      <Svg svg={plus} className="w-8 cursor-pointer" />
    </Card>
  );
};
export default Navbar;
