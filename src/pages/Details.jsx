import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../template/Layout";
const Details = () => {
  const params = useParams();
  return (
    <Layout>
      <div className="ml-72">Details ID: {params.id}</div>
    </Layout>
  );
};

export default Details;
