import React from "react";

const submitData = async () => {
  const nodeUrl = "http://localhost:6060?";
  fetch(nodeUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    // body: JSON.stringify({'test': 'test'})
    body: JSON.stringify({ from: "example@email.com", to: "example@email.com" })
  })
    .then((res) => {
      alert("then");
      alert(JSON.stringify(res));
    })
    .catch((err) => {
      alert("err");
      alert(JSON.stringify(err));
    });
};

export default function App() {
  return (
    <div className="App">
      <button type="submit" onClick={() => submitData()}>
        submit
      </button>
    </div>
  );
}
