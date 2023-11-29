function addRow() {
    // Get the table body
    var tbody = document.getElementById('tbodyy');

    // Create a new row
    var newRow = tbody.insertRow();

    // Add cells to the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the cell content (you can modify this as needed)
    cell1.innerHTML = 'New Data 1';
    cell2.innerHTML = 'New Data 2';
}
