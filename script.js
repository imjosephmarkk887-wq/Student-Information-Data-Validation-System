const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the values
    const studentId =
        document.getElementById("studentId").value.trim();

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value;

    const yearLevel =
        document.getElementById("yearLevel").value;


    // Error message elements
    const studentIdError =
        document.getElementById("studentIdError");

    const fullNameError =
        document.getElementById("fullNameError");

    const emailError =
        document.getElementById("emailError");

    const courseError =
        document.getElementById("courseError");

    const yearLevelError =
        document.getElementById("yearLevelError");

    const successMessage =
        document.getElementById("successMessage");


    // Input elements
    const studentIdInput =
        document.getElementById("studentId");

    const fullNameInput =
        document.getElementById("fullName");

    const emailInput =
        document.getElementById("email");

    const courseInput =
        document.getElementById("course");

    const yearLevelInput =
        document.getElementById("yearLevel");


    // Put all errors and inputs into arrays
    const errorMessages = [
        studentIdError,
        fullNameError,
        emailError,
        courseError,
        yearLevelError
    ];

    const inputs = [
        studentIdInput,
        fullNameInput,
        emailInput,
        courseInput,
        yearLevelInput
    ];


    // Clear previous messages and error styles
    errorMessages.forEach(function(error) {
        error.textContent = "";
        error.classList.remove("show");
    });

    inputs.forEach(function(input) {
        input.classList.remove("input-error");
    });

    successMessage.style.display = "none";


    let isValid = true;


    // STUDENT ID VALIDATION
    const studentIdPattern = /^\d{4}-\d{4}$/;

    if (studentId === "") {

        studentIdError.textContent =
            "Student ID is required.";

        studentIdError.classList.add("show");
        studentIdInput.classList.add("input-error");

        isValid = false;

    } else if (!studentIdPattern.test(studentId)) {

        studentIdError.textContent =
            "Use this format: 2026-0001.";

        studentIdError.classList.add("show");
        studentIdInput.classList.add("input-error");

        isValid = false;
    }


    // FULL NAME VALIDATION
    if (fullName === "") {

        fullNameError.textContent =
            "Full name is required.";

        fullNameError.classList.add("show");
        fullNameInput.classList.add("input-error");

        isValid = false;
    }


    // EMAIL VALIDATION
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Email address is required.";

        emailError.classList.add("show");
        emailInput.classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Enter a valid email address.";

        emailError.classList.add("show");
        emailInput.classList.add("input-error");

        isValid = false;
    }


    // COURSE VALIDATION
    if (course === "") {

        courseError.textContent =
            "Please select your course.";

        courseError.classList.add("show");
        courseInput.classList.add("input-error");

        isValid = false;
    }


    // YEAR LEVEL VALIDATION
    if (yearLevel === "") {

        yearLevelError.textContent =
            "Please select your year level.";

        yearLevelError.classList.add("show");
        yearLevelInput.classList.add("input-error");

        isValid = false;
    }


    // SUCCESS MESSAGE
    if (isValid) {

        successMessage.textContent =
            "Student information submitted successfully!";

        successMessage.style.display = "block";
    }

});
