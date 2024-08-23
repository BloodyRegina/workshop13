// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../template/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="w-full ml-64 text-black rounded-lg bg-gradient-to-r from-slate-200 to-slate-500 text-center">
        <h1 className="text-6xl font-bold">Soi 7 IT</h1>
        <hr />
        <p className="py-2 absolute text-white left-1/2 top-1/3 text-xl">เว็บไซต์สำหรับการจำหน่ายอุปกรณ์ IT</p>
        <div className="h-screen bg"></div>
        <hr />
      </section>
    </Layout>
  );
};

export default Home;
