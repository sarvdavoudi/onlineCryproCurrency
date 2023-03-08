const fetchCoinsFromApi = async () => {
  const Response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const jsonResponse = await Response.json();
  return jsonResponse;
};

//when page is loaded
document.addEventListener("DOMContentLoaded", () => {
  let timer = setInterval(async () => {
    const coins = await fetchCoinsFromApi();
    showData(coins);
  }, 5000);
});

const showData = (arrayOfCoins) => {
  const finalView = arrayOfCoins.map((item) => `<p>${item.name} : ${item.current_price} </p>`);
  showbox = document.getElementById("data-box");
  showbox.innerHTML = finalView.join("");
};
