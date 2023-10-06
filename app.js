
// var name, gender,preName,type,nameOfDrink;
// var br = document.createElement("br");
	
			
// 	// Create a form dynamically
// 	var form = document.createElement("form");
// 	form.setAttribute("method", "post");
// 	form.setAttribute("action", "submit.php");

// 	// Create an input element for Full Name
// 	var FN = document.createElement("input");
// 	FN.setAttribute("type", "text");
// 	FN.setAttribute("name", "FullName");
// 	FN.setAttribute("placeholder", "Full Name");

// 	// Create an input element for date of birth
// 	var bod = document.createElement("input");
// 	bod.setAttribute("type", "date");
// 	bod.setAttribute("name", "Date of birth");
// 	bod.setAttribute("placeholder", "Date of birth");


//     var gender = document.createElement("input");
// 	gender.setAttribute("type", "text");
// 	gender.setAttribute("name", "dob");
// 	gender.setAttribute("placeholder", "gender");


//     var pn = document.createElement("input");
// 	pn.setAttribute("type", "number");
// 	pn.setAttribute("name", "phone number");
// 	pn.setAttribute("placeholder", "phone number");


//     var grade = document.createElement("input");
// 	grade.setAttribute("type", "number");
// 	grade.setAttribute("name", "grade");
// 	grade.setAttribute("placeholder", "grade");



//     var s = document.createElement("input");
// 				s.setAttribute("type", "submit");
// 				s.setAttribute("value", "Submit");
				
// 				// Append the full name input to the form
// 				form.appendChild(FN);
				
// 				// Inserting a line break
// 				form.appendChild(br.cloneNode());
				
// 				// Append the DOB to the form
// 				form.appendChild(bod);
// 				form.appendChild(br.cloneNode());


//                 form.appendChild(gender);
// 				form.appendChild(br.cloneNode());


//                 form.appendChild(pn);
// 				form.appendChild(br.cloneNode());


//                 form.appendChild(grade);
// 				form.appendChild(br.cloneNode());
                
				
				
				
				
				
// 				// Append the submit button to the form
// 				form.appendChild(s);

// 				document.getElementsByTagName("body")[0]
// 			.appendChild(form);


// Create a form element
// var form = document.createElement("form");
// var br = document.createElement("br");
// // Create name input
// var nameLabel = document.createElement("label");
// nameLabel.textContent = "Full Name:";
// var nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.id = "name";
// form.appendChild(nameLabel);
// form.appendChild(nameInput);
// form.appendChild(br.cloneNode());
// form.appendChild(br.cloneNode());


// // Create age input
// var ageLabel = document.createElement("label");
// ageLabel.textContent = "Date of birth:";
// var ageInput = document.createElement("input");
// ageInput.type = "text";
// ageInput.id = "dob";
// form.appendChild(ageLabel);
// form.appendChild(ageInput);
// form.appendChild(br.cloneNode());
// form.appendChild(br.cloneNode());

// var ageLabel = document.createElement("label");
// ageLabel.textContent = "Gender:";
// var ageInput = document.createElement("input");
// ageInput.type = "text";
// ageInput.id = "Gender";
// form.appendChild(ageLabel);
// form.appendChild(ageInput);
// form.appendChild(br.cloneNode());
// form.appendChild(br.cloneNode());

// var ageLabel = document.createElement("label");
// ageLabel.textContent = "phone number:";
// var ageInput = document.createElement("input");
// ageInput.type = "text";
// ageInput.id = "pn";
// form.appendChild(ageLabel);
// form.appendChild(ageInput);
// form.appendChild(br.cloneNode());
// form.appendChild(br.cloneNode());

// var ageLabel = document.createElement("label");
// ageLabel.textContent = "grade:";
// var ageInput = document.createElement("input");
// ageInput.type = "text";
// ageInput.id = "grade";
// form.appendChild(ageLabel);
// form.appendChild(ageInput);
// form.appendChild(br.cloneNode());
// form.appendChild(br.cloneNode());

// // Create a submit button
// var submitButton = document.createElement("button");
// submitButton.type = "button";
// submitButton.textContent = "Add to Table";

// // Create a table element
// var table = document.createElement("table");
// table.id = "dataTable";
// var tableBody = document.createElement("tbody");
// table.appendChild(tableBody);

// // Append form and table to the body
// document.body.appendChild(form);
// document.body.appendChild(table);
// document.body.appendChild(submitButton);

// // Add event listener to the submit button
// submitButton.addEventListener("click", function() {
//   // Get form data
//   var name = document.getElementById("name").value;
//   var dob = document.getElementById("dob").value;
//   var Gender = document.getElementById("Gender").value;
//   var pn = document.getElementById("pn").value;
//   var grade = document.getElementById("grade").value;

//   // Get the table body element
//   var tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
//   table.style.border = "10px solid black";
  
//   // Create a new row and cells
//   var newRow = tableBody.insertRow();
//   var cell1 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   var cell3 = newRow.insertCell(2);
//   var cell4 = newRow.insertCell(3);
//   var cell5 = newRow.insertCell(4);

//   // Set cell values
//   cell1.textContent = name;
//   cell2.textContent = dob;
//   cell3.textContent = Gender;
//   cell4.textContent = pn;
//   cell5.textContent = grade;

//   // Clear the form fields after adding data to the table
//   document.getElementById("name").value = "";
//   document.getElementById("dob").value = "";
//   document.getElementById("Gender").value = "";
//   document.getElementById("pn").value = "";
//   document.getElementById("grade").value = "";
// });



function addToTable() {
	// Get form data
	var name = document.getElementById("name").value;
	var dob = document.getElementById("dob").value;
	var gender = document.getElementById("gender").value;
	var pn = document.getElementById("pn").value;
	var grade = document.getElementById("grade").value;
	// Get the table body element
	var tableBody = document.getElementById("tableBody");
  
	// Create a new row and cells
	var newRow = tableBody.insertRow();
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
  
	// Set cell values
	cell1.textContent = name;
	cell2.textContent = dob;
	cell3.textContent = gender;
	cell4.textContent = pn;
	cell5.textContent = grade;
  
	// Clear the form fields after adding data to the table
	document.getElementById("name").value = "";
	document.getElementById("dob").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("pn").value = "";
	document.getElementById("grade").value = "";
  }







document.addEventListener("DOMContentLoaded", function() {
    const studentForm = document.getElementById("student-form");
    const studentsContainer = document.getElementById("students-container");

    // Constructor function for Student objects
    function Student(fullName, dob, gender, major, imageUrl, phoneNumber) {
        this.fullName = fullName;
        this.dob = dob;
        this.gender = gender;
        this.major = major;
        this.imageUrl = imageUrl;
        this.phoneNumber = phoneNumber;
    }

    // Function to render students' information in separate cards
    function renderStudentCard(student) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${student.imageUrl}" alt="Student Image">
            <h2>${student.fullName}</h2>
            <p><strong>Date of Birth:</strong> ${student.dob}</p>
            <p><strong>Gender:</strong> ${student.gender}</p>
            <p><strong>Major:</strong> ${student.major}</p>
            <p><strong>Phone Number:</strong> ${student.phoneNumber}</p>
        `;

        studentsContainer.appendChild(card);
    }

    // Event listener for form submission
    studentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const major = document.getElementById("major").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        // Create a new Student object
        const student = new Student(fullName, dob, gender, major, imageUrl, phoneNumber);

        // Render the student's information as a card
        renderStudentCard(student);

        // Clear the form fields
        studentForm.reset();
    });
});




  
			