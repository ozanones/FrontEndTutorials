const baseManager = {
    get: (url) => {
        let products = [];

        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return data;
            });

        let newProducts = products.splice(0, 5);
        return newProducts;
    }
}





async function getData() {

    let products = [];

    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });

    let newProducts = products.splice(0, 5);
    return newProducts;

}

getData('https://northwind.vercel.app/api/products').then((productsData) => {

    console.log(productsData);

})

let result = baseManager.get('https://northwind.vercel.app/api/products')

console.log(result);