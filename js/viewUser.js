function addRow(email, reason, ban) {
    // Get the table body
    var tbody = document.getElementById('tbodyy');

    // Create a new row
    var newRow = tbody.insertRow();

    // Add cells to the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Set the cell content (you can modify this as needed)
    cell1.innerHTML = email
    cell2.innerHTML = reason
    cell3.innerHTML = ban
}   


function getData() {
    // Get form elements by their IDs
    var email = document.getElementById('inputEmail4').value;
    var reason = document.getElementById('inputReason5').value;
    var ban = "Yes";
    if(email == ""){
        alert("Email cannot be empty");
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    if (!emailRegex.test(email)) {
        alert('Email address is invalid');
        document.getElementById('inputEmail4').value="";
        document.getElementById('inputReason5').value="";
        return;
    }
    // Display the data (you can modify this part based on your needs)
    addRow(email, reason, ban);
     document.getElementById('inputEmail4').value="";
     document.getElementById('inputReason5').value="";
}

