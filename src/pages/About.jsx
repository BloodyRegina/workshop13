// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../template/Layout";
const About = () => {
  return (
    <Layout>
      <section className="ml-64 text-center w-full bg-gradient-to-r from-slate-200 to-slate-500">
        <h1 className="text-6xl font-bold">About</h1>
        <hr />
        <div className="flex justify-center items-center  py-2">
          <p>I'm Thanwa CEO of Soi 7 IT</p>
        </div>
        <img src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="" />
        <hr />
      </section>
    </Layout>
  );
};

export default About;
