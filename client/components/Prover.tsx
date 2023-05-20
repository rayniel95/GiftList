import server from "./server";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export function Prover() {
  const [name, setName] = useState("");
  const [proof, setProof] = useState("");
  const [validProof, setValidProof] = useState(true)

  async function sendProof() {
    // if (validPublickKey(address)) {
    //   const {
    //     data: { balance },
    //   } = await server.get(`balance/${address}`);
    //   setBalance(balance);
    // }
  }

  return (
    <form className="container transfer" onSubmit={sendProof}>
      <h1>Prover</h1>

      <label>
        Your name
        <input
          placeholder="type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <label>
        Proof
        <input
          placeholder="['some hash 1', 'some hash 2', ...]"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
        ></input>
      </label>
      {validProof ? "":<p>That is not a valid proof</p>}
      <input type="submit" className="button" value="prove" />
    </form>
  );
}