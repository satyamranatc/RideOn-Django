document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById("userList");
    const UserForm = document.getElementById("UserForm");

    // Fetch and display users on page load
    async function fetchUsers() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/Users");
            displayUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
            alert("Failed to load users. Check server connection.");
        }
    }

    // Display users in the list
    function displayUsers(users) {
        userList.innerHTML = ""; // Clear existing list
        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="user-details">
                    <p><strong>Username:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>User Type:</strong> ${user.user_type}</p>
                </div>
                <div class="user-actions">
                    <button class="delete-btn" data-id="${user.id}">Delete</button>
                    <button class="update-btn" data-id="${user.id}">Update</button>
                </div>
            `;
            
            // Delete button functionality
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', async function() {
                try {
                    await axios.delete(`http://127.0.0.1:8000/api/Users/${this.dataset.id}/delete/`);
                    li.remove();
                } catch (error) {
                    console.error("Error deleting user:", error);
                    alert("Failed to delete user. Please try again.");
                }
            });

            // Update button placeholder
            const updateBtn = li.querySelector('.update-btn');
            updateBtn.addEventListener('click', function() {
                alert("Update functionality to be implemented");
                // TODO: Implement update logic
            });

            userList.appendChild(li);
        });
    }

    // Add new user form submission
    UserForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", document.getElementById('username').value);
        formData.append("email", document.getElementById('email').value);
        formData.append("password", document.getElementById('password').value);
        formData.append("phone", document.getElementById('phone').value);
        formData.append("user_type", document.getElementById('UserType').value);

        try {
            await axios.post("http://127.0.0.1:8000/api/Users/create/", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            // Refresh user list
            fetchUsers();
            
            // Reset form
            UserForm.reset();
            alert("User added successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to add user. Please check the inputs.");
        }
    });

    // Initial fetch of users
    fetchUsers();
});