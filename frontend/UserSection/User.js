let SignInForm = document.getElementById("SignInForm");

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab button');
    const tabContents = document.querySelectorAll('.tab-content > div');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and tab contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });

    // Set first tab as active by default
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});

SignInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    let User = {
        email: email,
        password: password
    }

    let Res= await axios.post("http://127.0.0.1:8000/api/Users/login/",User);
    console.log(Res.data);
    let UserData = Res.data;

    localStorage.setItem("Userdata",JSON.stringify(UserData));

    let U = JSON.parse(localStorage.getItem("Userdata"));




    


    // Reset form
    SignInForm.reset();

})