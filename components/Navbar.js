// Navbar.js
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const ClickHandle = () => {
    setShow(true);
  };

  return (
    <>
      {!show && (
        <div className="mx-24 mt-5 px-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <button onClick={ClickHandle}>
                <Image width={30} height={30} src="/img/menu.svg" alt="" />
              </button>
              <button>
                <Image width={30} height={30} src="/img/search.svg" alt="" />
              </button>
            </div>

            <div className="flex items-center text-black">
              ROCKET <img src="/img/LIGH.SVG" alt="" /> GARAGE
            </div>

            <div className="flex items-center text-black font-extrabold">
              <a href="/Contact">contact</a>
            </div>
          </div>
        </div>
      )}

      {show && <Modal mods={setShow} />}
    </>
  );
};

export default Navbar;
