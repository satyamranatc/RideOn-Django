let CardGrid = document.querySelector(".car-grid");
document.addEventListener("DOMContentLoaded",()=>{
    // Fetch and display users on page load
    fetchCars();
})

// Fetch and display cars
async function fetchCars() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/Car/");
        displayCars(response.data);
    } catch (error) {
        console.error("Error fetching cars:", error);
        alert("Failed to load cars. Check server connection.");
    }
}

// Display cars in the list
function displayCars(cars) {
    // Clear existing list

    CardGrid.innerHTML = "";

    // Display each car
    cars.forEach(car => {
        let carCard = document.createElement("div");
        carCard.classList.add("car-card"); 
        carCard.innerHTML += `
                <img src="${car.image}" alt="Car A">
        `
        let CarCardContent = document.createElement("div")
        CarCardContent.classList.add("car-card-content");
        CarCardContent.innerHTML += `
                <h2>${car.brand} ${car.model}</h2>
                <p>Year: ${car.year}</p>
                <p>Color: ${car.color}</p>
        `

        let RentNow = document.createElement("button");
        RentNow.innerHTML = "Rent Now";
        RentNow.addEventListener("click", ()=>{
            alert("Car rented successfully!");
        });

        CarCardContent.appendChild(RentNow);
        carCard.appendChild(CarCardContent);
        CardGrid.appendChild(carCard); 
    });
}