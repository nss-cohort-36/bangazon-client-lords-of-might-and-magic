


const ApiManager = {
    fetchProducts : function() {
        return fetch("http://localhost:5002/products", {
            "headers": {
              "Accept": "application/json"
            }
          })
            .then(response => response.json())
    }

};

export default ApiManager
