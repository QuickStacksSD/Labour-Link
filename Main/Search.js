const services = {
  moving: [
    { name: "Fast Movers SJ", description: "Quick and reliable moving services", location: "Saint John" },
    { name: "Fast Movers Moncton", description: "Quick and reliable moving services", location: "Moncton" },
    { name: "Fast Movers Fred", description: "Quick and reliable moving services", location: "Fredericton" }
  ],
  trades: [
    { name: "Pro Trades SJ", description: "Trusted local tradespeople", location: "Saint John" },
    { name: "Pro Trades Moncton", description: "Trusted local tradespeople", location: "Moncton" },
    { name: "Pro Trades Fred", description: "Trusted local tradespeople", location: "Fredericton" }
  ],
  lawncare: [
    { name: "LawnPro SJ", description: "Expert lawn care service", location: "Saint John" },
    { name: "LawnPro Moncton", description: "Expert lawn care service", location: "Moncton" },
    { name: "LawnPro Fred", description: "Expert lawn care service", location: "Fredericton" }
  ],
  cleaning: [
    { name: "Clean Crew SJ", description: "Top-notch cleaning for homes and offices", location: "Saint John" },
    { name: "Clean Crew Moncton", description: "Top-notch cleaning for homes and offices", location: "Moncton" },
    { name: "Clean Crew Fred", description: "Top-notch cleaning for homes and offices", location: "Fredericton" }
  ],
  plumbing: [
    { name: "PlumbEasy SJ", description: "Reliable plumbing experts", location: "Saint John" },
    { name: "PlumbEasy Moncton", description: "Reliable plumbing experts", location: "Moncton" },
    { name: "PlumbEasy Fred", description: "Reliable plumbing experts", location: "Fredericton" }
  ]
};

function searchServices() {
  const category = document.getElementById("category").value;
  const location = document.getElementById("location").value;
  const resultsDiv = document.getElementById("results");
  const resultList = services[category] || [];

  // Clear previous results
  resultsDiv.innerHTML = "";

  // Filter by location
  const filteredResults = resultList.filter(service => service.location === location);

  if (filteredResults.length === 0) {
    resultsDiv.innerHTML = "<p>No services found for this category and location.</p>";
    return;
  }

  // Create table
  const table = document.createElement("table");

  // Header
  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Service Name", "Description", "Location", "Contact"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  tableHeader.appendChild(headerRow);

  // Body
  const tableBody = document.createElement("tbody");
  filteredResults.forEach(service => {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = service.name;

    const cell2 = document.createElement("td");
    cell2.textContent = service.description;

    const cell3 = document.createElement("td");
    cell3.textContent = service.location;

    const cell4 = document.createElement("td");
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn");
    contactBtn.textContent = "Contact";
    cell4.appendChild(contactBtn);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tableBody.appendChild(row);
  });

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  resultsDiv.appendChild(table);
}

// ✅ Wait until DOM is ready to attach click handler
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-btn").addEventListener("click", searchServices);
});
