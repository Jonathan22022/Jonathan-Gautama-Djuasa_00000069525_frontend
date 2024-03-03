import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import "./Layout.css";

const Fact = () => {
  /*mengatur state lokal yaitu fact yang diambil dengan API*/
  const [fact, setFact] = useState("");

  /*memanggil fetchData setelah komponen dimuat*/
  useEffect(() => {
    fetchData();
  }, []);

  /*menggunakan axios untuk melakukanpermintaan HTTP ke URL "https://catfact.ninja/fact"*/
  const fetchData = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  /*memanggil fungsi fetchData() untuk mengubah state*/
  const handleRefresh = () => {
    fetchData();
  };

  return (
      <body>
        <div class="container">
        <div class="card" id="a">
          {/*{fact} akan digantikan dengan nilai dari state fact yang diperbarui setelah mendapatkan fakta baru tentang kucing dari API*/}
          <div class="card-body" id="c">{fact}</div>
          {/*flexbox untuk button*/}
            <div id="b">
              <Link to="/home">
                <button type="button" class="btn btn-outline-danger btn-lg btn-neon-red">Return</button>
              </Link>
              <button type="button" class="btn btn-outline-primary btn-lg btn-neon-blue" onClick={handleRefresh}>Refresh</button>
            </div>
          </div>
        <div class="holo"></div>
        </div>
      </body>
  );
};

export default Fact;
