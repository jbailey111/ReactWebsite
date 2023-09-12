import "./header.css";
import Button from "../Button/Button";
import { BsCameraVideo } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <div class="buttons">
        <Button
          width="60px"
          height="50px"
          fontSize={"22px"}
          colour={"white"}
          fontColour={"Blue"}
          border={"1px solid #d3d3d3"}
        >
          <BsCameraVideo />
        </Button>
        <Button width="140px" height="50px" colour={"#02055d"}>
          Find out more
        </Button>
      </div>
    </div>
  );
};

export default Header;
