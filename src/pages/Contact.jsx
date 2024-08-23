// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../template/Layout";
import { CiFacebook } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <Layout>
      <section className="ml-64 text-center w-full py-5 bg-gradient-to-r from-slate-200 to-slate-500">
      <h1 className="text-6xl font-bold">Contact</h1>
      <hr />
      <div className="flex flex-col justify-center items-center text-xl">
      <a href="" className="flex justify-center items-center"><CiFacebook/>Pat Thanwa</a>
      <a href="" className="flex justify-center items-center"><FaPhone />080-643-4262</a>
      </div>
      <hr />
      </section>
    </Layout>
  );
};

export default Contact;
