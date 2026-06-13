const select = document.querySelector("#productName");

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    select.appendChild(option);

});

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;