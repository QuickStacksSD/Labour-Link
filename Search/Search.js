// Define sample service data for each category
const services = {
    moving: [
        { name: "Fast Movers", description: "Quick and reliable moving services" },
        { name: "MoveIt Pro", description: "Professional moving company with great rates" }
    ],
    trades: [
        { name: "Pro Plumbers", description: "Experienced plumbers for all your needs" },
        { name: "Electric Solutions", description: "Electricians offering fast and safe repairs" }
    ],
    lawncare: [
        { name: "Green Lawn Co.", description: "Expert lawn care and landscaping services" },
        { name: "Lawn Masters", description: "Providing premium lawn maintenance and design" }
    ],
    cleaning: [
        { name: "Clean Sweepers", description: "High-quality residential and commercial cleaning" },
        { name: "Sparkle Cleaners", description: "Offering deep cleaning services for homes and offices" }
    ],
    plumbing: [
        { name: "Pipe Masters", description: "Plumbing experts for repairs and installation" },
        { name: "Leak Fixers", description: "Fast and affordable leak detection and repair" }
    ]
};

// Function to perform the search
function searchServices() {
    const category = document.getElementById("category").value;
    const resultsDiv = document.getElementById("results");
    const resultList = services[category] || [];

    // Clear previous results
    resultsDiv.innerHTML = "";

    if (resultList.length === 0) {
        resultsDiv.innerHTML = "<p>No services available for this category.</p>";
        return;
    }

    // Create a table for results
    const table = document.createElement("table");

    // Create the table header as a proper DOM node
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Service Name";
    const th2 = document.createElement("th");
    th2.textContent = "Description";
    const th3 = document.createElement("th");
    th3.textContent = "Contact";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    headerRow.appendChild(th3);
    tableHeader.appendChild(headerRow);
    
    // Create the table body as a proper DOM node
    const tableBody = document.createElement("tbody");

    resultList.forEach(service => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = service.name;
        const cell2 = document.createElement("td");
        cell2.textContent = service.description;
        const cell3 = document.createElement("td");
        const contactButton = document.createElement("button");
        contactButton.classList.add("btn");
        contactButton.textContent = "Contact";
        cell3.appendChild(contactButton);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tableBody.appendChild(row);
    });

    // Append header and body to the table
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    resultsDiv.appendChild(table);
}
