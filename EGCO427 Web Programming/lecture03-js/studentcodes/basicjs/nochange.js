// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
  //add your code here
  let french = document.getElementById("french").value;
  let hazlenut = document.getElementById("hazlenut").value;
  let columbian = document.getElementById("columbian").value;
  // Compute the cost
  const price = {
    french: 3.49,
    hazlenut: 3.95,
    columbian: 4.59,
  };

  if (french < 0 || hazlenut < 0 || columbian < 0) {
    totalCost = "";
    alert("Invalid Input");
    return;
  }

  totalCost =
    french * price.french +
    hazlenut * price.hazlenut +
    columbian * price.columbian;

  document.getElementById("cost").value = totalCost;
}
// end of computeCost
