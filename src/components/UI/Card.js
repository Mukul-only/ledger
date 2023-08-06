import { twMerge } from "tailwind-merge";
const Card = (props) => {
  return (
    <div className={twMerge("max-w-6xl mx-auto px-6", props.className)}>
      {props.children}
    </div>
  );
};
export default Card;
