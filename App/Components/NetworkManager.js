
var BASE_URL = "http://5.101.106.146:4000/";

//TODO cache should be less than 5 mins or have a more complex algoritm to get correct active game.

let NetworkManager = {
  request(method: String, body: Object, cb: Function){
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
      console.log("Network Request: ",response);
      cb(response);
    })
  }
};


module.exports = NetworkManager;
