import React, { useState, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import axios from "axios";

export default function Coordlist() {
  const [requeriments, setRequeriments] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:3333/2ndcall/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.data.length === 0) {
          M.toast({
            html: `Nenhum requerimento solicitado.`,
            classes: "red lighten-1",
          });
        }
        console.log(response.data);
        setRequeriments(response.data);
      })
      .catch((err) => {
        M.toast({
          html: `${err}`,
          classes: "red lighten-1",
        });
      });
  }, []);

  return (
    <div>
      <div className="container ">
        <table className="highlight centered table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo de Requerimento</th>
              <th>Data da Solicitação</th>
              <th>Situação</th>
              <th>Opções</th>
            </tr>
          </thead>

          <thead>
            {requeriments.map((reqs) => (
              <tr key={reqs.id}>
                <th>{reqs.id}</th>
                <th>{reqs.requeriment}</th>
                <th>{reqs.created_at.split("T", 2)[0]}</th>
                <th>{reqs.status}</th>
                <th>
                  <a
                    class="waves-effect green lighten-2 btn"
                    href={`/coordenacao/${reqs.id}`}
                  >
                    analisar requerimento
                  </a>
                </th>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
