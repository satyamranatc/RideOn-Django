let RentTable = document.getElementById("RentTable");


async function GetRentData()
{
    let Res = await axios.get("http://127.0.0.1:8000/api/Rent/");
    console.log(Res.data);

    
    let AllCardId = Res.data.map((e)=>e.car)
    console.log(AllCardId)

    let AllUserId = Res.data.map((e)=>e.user)
    console.log(AllUserId)



    displayRentData(Res.data);

}

GetRentData();

function displayRentData(data,CarData,UserData) 
{
    RentTable.innerHTML = "";
    data.forEach(async(element) => {
        let CarData = await axios.get(`http://127.0.0.1:8000/api/Car/${element.car}`);
        let UserData = await axios.get(`http://127.0.0.1:8000/api/Users/${element.user}`);

        let row = document.createElement("tr");
        row.innerHTML += `
        <td>${CarData.data.brand} </td>
        <td>${CarData.data.model} </td>
        <td>${UserData.data.name}</td>
        <td>${element.rental_date}</td>
        <td>${element.return_date}</td>
        <td>$${element.total_price}</td>
        

            <td><button class="delete-btn" data-id="${element.id}">Delete</button></td>
            <td><button class="update-btn" data-id="${element.id}">Update</button></td>
        `;
        RentTable.appendChild(row);
    });
}