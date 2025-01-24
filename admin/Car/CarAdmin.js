document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById("carList");
    const addCarForm = document.getElementById("addCarForm");

    // Fetch and display cars on page load
    async function fetchCars() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/Car");
            displayCars(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
            alert("Failed to load cars. Check server connection.");
        }
    }

    // Display cars in the list
    function displayCars(cars) {
        carList.innerHTML = ""; // Clear existing list
        cars.forEach(car => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${car.carPoster}" alt="Car Poster">
                <div class="car-details">
                    <p><strong>Brand:</strong> ${car.brand}</p>
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Year:</strong> ${car.year}</p>
                    <p><strong>Color:</strong> ${car.color}</p>
                </div>
                <div class="car-actions">
                    <button class="delete-btn" data-id="${car.id}">Delete</button>
                    <button class="update-btn" data-id="${car.id}">Update</button>
                </div>
            `;
            
            // Delete button functionality
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', async function() {
                try {
                    await axios.delete(`http://127.0.0.1:8000/api/Car/${this.dataset.id}/delete/`);
                    li.remove();
                } catch (error) {
                    console.error("Error deleting car:", error);
                    alert("Failed to delete car. Please try again.");
                }
            });

            // Update button placeholder
            const updateBtn = li.querySelector('.update-btn');
            updateBtn.addEventListener('click', function() {
                alert("Update functionality to be implemented");
            });

            carList.appendChild(li);
        });
    }

    // Add new car form submission
    addCarForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("brand", document.getElementById('brand').value);
        formData.append("model", document.getElementById('modelInput').value);
        formData.append("year", document.getElementById('yearInput').value);
        formData.append("color", document.getElementById('colorInput').value);
        formData.append("carPoster", document.getElementById('carPoster').files[0]);

        try {
            await axios.post("http://127.0.0.1:8000/api/Car/create", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            // Refresh car list
            fetchCars();
            
            // Reset form
            addCarForm.reset();
            alert("Car added successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to add car. Please check the inputs.");
        }
    });

    // Initial fetch of cars
    fetchCars();
});