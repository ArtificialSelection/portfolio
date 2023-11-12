import React from "react";
import "./Handles.css";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineBank,
} from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Handles = () => {
  return (
    <section className="socials">
      <a href="" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterSquare className="icon" />
      </a>
      <a
        href="https://github.com/ArtificialSelection"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="icon" />
      </a>
      <a
        href="https://sepolia.etherscan.io/address/0x77a53df86A91E0D5Fdc10aB4c43De0e7b88EF2f1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineBank className="icon" />
        <p>Sepolia Etherscan</p>
      </a>
    </section>
  );
};

export default Handles;
