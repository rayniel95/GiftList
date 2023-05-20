import { Prover } from "../components";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";


export default function Home() {

  return (
    <>
      <div>
        <p>
          Made with ❤️ by <a href="https://rayniel95.github.io/">Rainyel Ramos</a>
        </p>
        <p>
          <a href="https://github.com/rayniel95/GiftList">Take a look to the code</a>
        </p>

      </div>
      <div className="app">
        <Prover />
      </div>
    </>
  );
}
