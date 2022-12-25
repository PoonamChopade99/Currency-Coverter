function usdToInr() {
  let dollers = document.getElementById("usd").value;

  let rupees = (dollers * 82.93).toFixed(2);

  document.getElementById("result").innerText = "₹" + rupees;
}
