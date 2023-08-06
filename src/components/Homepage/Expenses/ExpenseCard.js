import { twMerge } from "tailwind-merge";
import Svg from "../../SVG/Svg";
import Delete from "../../SVG/delete";
const ExpenseCard = (props) => {
  return (
    <div
      className={twMerge(
        "p-4 flex space-x-3 rounded-lg justify-between bg-primary text-white my-3",
        props.className
      )}
    >
      <div>
        <div className="text-3xl font-semibold">23</div>
        <div className="text-sm tracking-[6px] mt-[-4px]">Fri</div>
      </div>
      <div className="flex-1">item</div>
      <div className="flex flex-col items-end justify-between">
        <div>₹60.00</div>
        <Svg svg={Delete} className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};
export default ExpenseCard;
