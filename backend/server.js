const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const apiUrl =
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.8373&lng=80.9165&carousel=true&third_party_vendor=1";
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => {
  console.log("Proxy server running on http://localhost:3000");
});