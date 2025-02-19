import React from "react";
import AuthHeaderButton from "./auth/AuthHeaderButton";

function Header() {
  return (
    <>
      <div className="flex justify-end">
        <AuthHeaderButton />
      </div>
    </>
  );
}

export default Header;
