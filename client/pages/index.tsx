import { Wallet, Transfer } from "../components";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";


export default function Home() {

  return (
    <>
      <div>
        <p>
          Made with ❤️ by <a href="https://rayniel95.github.io/">Rainyel Ramos</a>
        </p>
        <p>
          <a href="https://github.com/rayniel95/ecdsa-node">Take a look to the code</a>
        </p>

      </div>
      <div className="app">
        <Transfer setBalance={setBalance} address={address} />
      </div>
    </>
  );
}
