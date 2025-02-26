import React from "react";
import AuthHeaderButton from "./auth/AuthHeaderButton";
import { Gamepad2 } from "lucide-react";

function Header() {
  return (
    <>
      <div className="flex justify-between md:justify-end items-center px-4 ">
        <div className="flex md:hidden items-center">
         <h1 className="text-2xl font-bold sigmar-regular">GAMES FOR US</h1>
        </div>
        <AuthHeaderButton />
      </div>
    </>
  );
}

export default Header;
