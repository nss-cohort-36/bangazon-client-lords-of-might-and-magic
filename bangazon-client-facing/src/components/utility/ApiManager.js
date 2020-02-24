


const ApiManager = {
    get : function(endpoint) {
        return fetch(`http://localhost:5002/${endpoint}`, {
            "headers": {
              "Accept": "application/json"
            }
          })
            .then(response => response.json())
    },
    post : function(endpoint, object) {
      return fetch(`http://localhost:8000/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
        },
        body: JSON.stringify(object)
      })
      .then(response => response.json())
    }
  }


export default ApiManager
