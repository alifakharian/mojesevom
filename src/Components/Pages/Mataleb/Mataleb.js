import Information from "./Information";
import Products from "./Products";

const Mataleb = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-4">
        <Products />
        <Information />
      </div>
    </>
  );
};

export default Mataleb;
