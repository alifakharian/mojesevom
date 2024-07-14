import { Button, Navbar } from "flowbite-react";
import meno from "./Meno.module.css";
import { Link } from "react-router-dom";
const Meno = () => {
  return (
    <>
      <Navbar
        fluid
        rounded
        className={`${meno.meno} bg-[#8a8784ea] container-fluid`}
      >
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="float-start">
          <Link to="">
            <Navbar.Link href="#">
              <div className="text-gray-700 hover:bg-[#353434] hover:text-[#eae6c5] hover:rounded-lg p-2  duration-700">
                لسیت دستگاه های رست قهوه
              </div>
            </Navbar.Link>
          </Link>

          <Link>
            <Navbar.Link href="#">
              <div className="text-gray-700 hover:bg-[#353434] hover:text-[#eae6c5] hover:rounded-lg p-2 duration-700">
                مارک های آسیاب قهوه
              </div>
            </Navbar.Link>
          </Link>

          <Link>
            <Navbar.Link href="#">
              <div className="text-gray-700 hover:bg-[#353434] hover:text-[#eae6c5] hover:rounded-lg p-2 duration-700">
                ماگ های دستگاه اسپرسو ساز
              </div>
            </Navbar.Link>
          </Link>
          <Link>
            <Navbar.Link href="#">
              <div className="text-gray-700 hover:bg-[#353434] hover:text-[#eae6c5] hover:rounded-lg p-2 duration-700">
                خانه
              </div>
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Meno;
