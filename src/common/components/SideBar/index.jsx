import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "./main";
function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  return (
    <>
      <div className={style.navbar}>
        <Link to={"#"} className={style.menubar}>
          <FaBars onClick={showSideBar} />
        </Link>
      </div>
      <div className={sidebar ? `${style.navMenu} ${style.active}` : `${style.navMenu}`}>
        <ul className={style.navMenuItem}>
          <div className={style.navBarToggle}>
            <Link to={"#"} className={style.menubar} onClick={showSideBar}>
              <AiOutlineClose />
            </Link>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={style.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
      
    </>
  );
}

export default Navbar;
