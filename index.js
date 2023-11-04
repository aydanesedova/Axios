// AXIOS POST method
// function fetch() {
//     axios.post("https://northwind.vercel.app/api/customers", {
//         name: inp.value,
//         description: inpTwo.value
//     }).then(res => {
//         console.log(res);
//     })

// }
// btn.addEventListener('click', fetch)


// Fetch POST method
// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/customers', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: inp.value,
//             description: inpTwo.value
//            }),
//         })
// })


//Fetch Put
const btn = document.getElementById("btn");
function fetchPut() {
    fetch(`https://northwind.vercel.app/api/customers/${id = "AROUT"}`,{
    method: "PUT",
    headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id : "Ayhan"
        }),
    
})
}
btn.addEventListener('click', fetchPut)




//AXIOS DELETE Method
// const category = document.getElementById("category");
// const inp = document.getElementById("inp");
// const inpTwo = document.getElementById("inpTwo");
// const btn = document.getElementById("btn");
// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${id = "WILMK" }`)
// }
// btn.addEventListener('click', axiosDelete)





//FETCH DELETE
// function Fetch() {
//         let url = `https://northwind.vercel.app/api/customers/${id = "BLAUS" }`;

//         fetch(url, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', Fetch)



// Axios Put
// function axiosPut (){
//     axios.put(`https://northwind.vercel.app/api/customers/${id = "BLONP" }`, id="Aydan" )
// }
// btn.addEventListener('click', axiosPut)


