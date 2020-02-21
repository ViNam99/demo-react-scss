import React from "react";
// import Loading from "../Loading/Loading";
const prefix = "header";
const Header = () => {
  return (
    <header className={prefix}>
      <h3 className={`${prefix}__title`}>Title</h3>
      {/* <Loading /> */}
      <button className={`${prefix}__btn`}>Click me!</button>
    </header>
  );
};

export default Header;
