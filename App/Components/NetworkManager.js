
var BASE_URL = "http://5.101.106.146:4000/";

let NetworkManager = {
  request(method, body, cb){
    fetch(BASE_URL + method, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((response)=>{
      cb(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
};


module.exports = NetworkManager;
