import React, { useState, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/js/materialize";
import "./style.css";

import axios from "axios";

export default function Listrequeriments() {
  const [requeriments, setRequeriments] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:3333/2ndcall", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.length === 0) {
          M.toast({
            html: `Nenhum requerimento solicitado.`,
            classes: "red lighten-1",
          });
        }
        
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
      <div className="container table">
        <table className="highlight centered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Requerimento</th>
              <th>Solicitado</th>
              <th>Observações</th>
              <th>Comprovante</th>
              <th>Situação</th>
            </tr>
          </thead>

          <thead>
            {requeriments.map((reqs) => (
              <tr key={reqs.id}>
                <th>{reqs.id}</th>
                <th>{reqs.requeriment}</th>
                <th>{reqs.created_at.split("T", 2)[0]}</th>
                <th>{reqs.comments}</th>
                <th>
                  <a
                    class="green lighten-2 btn"
                    href={reqs.url}
                    target="_blank"
                  >
                    Atestato
                  </a>
                </th>
                <th>{reqs.status}</th>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
