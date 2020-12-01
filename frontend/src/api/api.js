import axios from "axios";

const api = () =>
  axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAwODM4NjE2LCJleHAiOjE2MDE0NDM0MTZ9.UBh9NNK3jex8WJkk-bCQGwRYrs2p97YjL9FiGfa2sCU",
    },
  });

  export default api();