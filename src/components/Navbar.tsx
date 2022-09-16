import React from "react";
import { pageConstants } from "../constants/AppContants";

interface IProps {
  setPage: (page: string) => void;
}

const Navbar = (props: IProps) => {
  const { setPage } = props;

  return (
    <nav>
      <button onClick={() => setPage(pageConstants.PLANETS)}>Planets</button>
      <button onClick={() => setPage(pageConstants.PEOPLE)}>People</button>
    </nav>
  );
};

export default Navbar;
