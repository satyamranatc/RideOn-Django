let addCarForm = document.getElementById("addCarForm");
let carList = document.getElementById("carList");


addCarForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    let brand = document.getElementById("brand").value;
    let model = document.getElementById("modelInput").value;
    let year = document.getElementById("yearInput").value;
    let color = document.getElementById("colorInput").value;
    let carPoster = document.getElementById("carPosterInput").files[0];

    let NewCar = {
        brand: brand,
        model: model,
        year: year,
        color: color,
        carPoster: carPoster
    }

    let Res = await axios.post(`http://127.0.0.1:8000/api/Car/create`,{
        car: NewCar
    },{
    
        headers: {
            'Content-Type':'multipart/form-data'
        }
    });
    console.log(Res.data);
    


  
});