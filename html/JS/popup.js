orgItems = {
  meditrack: ["manufacturer", "dealer", "logistics", "pharmacy", "inspection"],
  oilandgas: [ "projectowner", "contractor1", "contractor2", "contractor3", "inspection1", "inspection2"]
};

document.getElementById("meditrack").onclick = element => {
  let orgBody = document.getElementById("orgBody");
  document.getElementById("subTitle").innerHTML = 'Organizations';
  while (orgBody.hasChildNodes()) {
    orgBody.removeChild(orgBody.firstChild);
  }
  for (let item of orgItems.meditrack) {
    let node = document.createElement('div');
    node.setAttribute('id',item);
    node.setAttribute("class", 'orgItem');
    let textNode = document.createElement('h4');
    textNode.innerHTML = item;
    node.appendChild(textNode);
    orgBody.appendChild(node);
  }
};

document.getElementById("oilandgas").onclick = element => {
  document.getElementById("subTitle").innerHTML = "Organizations";
  alert("Opening oilandgas Wallet");
};



// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute("value", data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.executeScript(tabs[0].id, {
//       code: 'document.body.style.backgroundColor = "' + color + '";'
//     });
//   });
// };