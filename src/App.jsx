import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const requestBody = {
    merchantCode: "7039453408",
    consumerSecret: "20cSEdt9T178UdlHJk9PNxyDq53h2C",
  };
  const apiKey =
    "mcHisp1aQ45cJAwXSfwunwhRSWw9XPHmDuBFQJY8ccESUmyVVPaQvahd5JM+3u/R/n2X6kktIZ82EhVGcoMzrQ==";

  useEffect(() => {
    fetchToken();
  }, []);
  const fetchToken = async () => {
    const res = await axios.post(
      "https://uat.finserve.africa/authentication/api/v3/authenticate/merchant",
      requestBody
    );
    setToken(res.data);
    console.log(res.data);
  };
  console.log(token);
  return (
    <>
      <div>testing bank transaction</div>
    </>
  );
}

export default App;
