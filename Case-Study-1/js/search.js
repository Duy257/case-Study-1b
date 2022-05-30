function search() {
    let open = document.getElementById('search-container');
    open.style.display = 'block';
    console.log(products);
    let a = (document.getElementById('search').value); 
    let container = '';
    for(let i = 0; i < products.length; i++) {
        let b = products[i].name;
        let result = b.includes(a);
        if(result == true) {
            container += `
            <div class="product">
                    <img src="${products[i].image}" alt="">
                    <h3>${products[i].name}</h3>
                    <p>Giá: ${products[i].price}</p>
                    <button onclick="addCart(${i})" class="addCart">Thêm vào giỏ hàng</button>
            </div>`
        }
    };   
    document.getElementById('arr-search').innerHTML = container;
     
}