document.getElementById('resumeForm')?.addEventListener("sumbit",function (event){ 
    event.preventDefault();
    //get reference to form elements using their IDs
    const profilePictureInput =document.getElementById(
        "profilePicture"
    )as HTMLInputElement;

    const nameElement = document.getElementById("name")as HTMLInputElement;
    const emailElement = document.getElementById("email")as HTMLInputElement;
    const phoneElement = document.getElementById("phone")as HTMLInputElement;
    const educationElement = document.getElementById(
        "education"
    )as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
        "experience"
    )as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
        "skills"
    )as HTMLTextAreaElement;

    //
