let items = [
    {
        name: "Paneer Butter Masala",
        category: "Main Course",
        price: 220,
        image: "paneerButterMasala.jpg"
    },
    {
        name: "Chicken Tikka",
        category: "Starters",
        price: 280,
        image: "chickenTikka.jpg"
    },
    {
        name: "Veg Fried Rice",
        category: "Rice & Noodles",
        price: 180,
        image: "vegFriedRice.jpg"
    }
];

let outputs = "";

items.forEach(item=>{
    outputs+=`
    <div class ="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p>₹${item.price}</p>
        <button onclick="itemSelected('${item.name}')">
        Select</button>
    </div>`;

});
document.querySelector("#catalogue").innerHTML = outputs;

function itemSelected(name){
    alert(`${name} Selected`);
}