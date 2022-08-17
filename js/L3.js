//work with local storage 
// localStorage.setItem("name" , "mohammad");

const data = { 
    nam :"mamad",
    family : "eydi",
    number : 09219872433
}

// localStorage.setItem("Data" , JSON.stringify(data))

const getedData = localStorage.getItem("Data")
parsedData = JSON.parse(getedData)
console.log(parsedData);