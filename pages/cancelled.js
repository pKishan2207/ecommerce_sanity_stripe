import React from "react";
import Link from "next/link";
import { BsBagXFill } from "react-icons/bs";

const Success = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon" style={{ color: "red" }}>
          <BsBagXFill />
        </p>
        <h2>There is some error on processing payment.</h2>
        <p className="email-msg">Please RETRY!!</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
