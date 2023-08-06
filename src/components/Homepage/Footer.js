const Footer = (props) => {
  return (
    <div className="flex justify-between items-center fixed bottom-0 left-0 right-0 mx-8 my-6 px-6 py-10 rounded-lg bg-primary-400 text-white font-medium text-lg cursor-pointer hover:shadow-lg duration-300 hover:bg-primary">
      <h1>Total Expenses</h1>
      <div className=" px-3 py-1 rounded-lg bg-primary-100">₹20.3</div>
    </div>
  );
};
export default Footer;
