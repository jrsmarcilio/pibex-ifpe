import axios from "axios";

const session = (data) => {

  const options = {
    method: 'POST',
    url: 'http://localhost:3333/sessions',
    headers: {
      'Content-Type': 'application/json'},
    data: data
  };
  
  axios.request(options).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.error(error);
  });

};

export default session();