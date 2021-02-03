import React from "react";
import { Pages } from "../Page";

export interface NavbarProps {
  setPage: Pages;
}

const Navbar: React.FC<any> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage(Pages.PLANETS)}>Planets</button>
      <button onClick={() => setPage(Pages.PEOPLE)}>People</button>
    </nav>
  );
};

export default Navbar;
