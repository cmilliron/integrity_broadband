

const setCopyrightDate = () => {
    const date = new Date().getFullYear();
    const dateLocation = document.getElementById("date");
    
    dateLocation.innerHTML = date;


}

setCopyrightDate()