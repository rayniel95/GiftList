import server from "./server";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import niceList from '../../utils/niceList.json';
import MerkleTree from '../../utils/MerkleTree';

const merkleTree = new MerkleTree(niceList);

export function Prover() {
  const [name, setName] = useState("");
  const [gift, setGift] = useState("");

  async function sendProof() {
    const index = niceList.findIndex(n => n === name);
    const proof = merkleTree.getProof(index);
    
    const { data: gift } = await server.post(`/gift`, {
      name,
      proof
    });
    setGift(gift)
    console.log({ gift });
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
      <p>
        Your gift is: {gift}
      </p>
      <input type="submit" className="button" value="prove" />
    </form>
  );
}