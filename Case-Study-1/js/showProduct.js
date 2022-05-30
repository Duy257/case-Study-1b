//Vẽ laptop

let pro1 = new Product("/Case-Study-1/img/img-lap/lap1.png", 'Laptop Acer Gaming Nitro 5', 18899000 ,1, 'laptop');
let pro2 = new Product("/Case-Study-1/img/img-lap/lap2.jpeg", 'Laptop Gigabyte Gaming G5', 21799000, 1, 'laptop');
let pro3 = new Product("/Case-Study-1/img/img-lap/lap3.jpeg", 'Laptop Asus Gaming ROG Strix G513IE', 24349000, 1, 'laptop');
let pro4 = new Product("/Case-Study-1/img/img-lap/lap4.jpeg", 'Laptop Dell Alienware Gaming M15 R5', 48999000, 1, 'laptop');
let pro5 = new Product("/Case-Study-1/img/img-lap/lap4.png", 'Laptop Asus VivoBook TM420UA-EC181W', 16299000, 1, 'laptop'); 'laptop'
let pro6 = new Product("/Case-Study-1/img/img-pc/pc0.jpg", 'PC GAMING HACOM PRO 029 ', 19499000, 1,  'pc');
let pro7 = new Product("/Case-Study-1/img/img-pc/pc1.jpg", 'PC GAMING HACOM PRO 038', 30199000, 1,  'pc');
let pro8 = new Product("/Case-Study-1/img/img-pc/pc2.jpg", 'PC GAMING HACOM 044', 12799000, 1,  'pc');
let pro9 = new Product("/Case-Study-1/img/img-pc/pc3.jpg", 'PC GAMING HACOM ESPORTS S1', 11099000, 1,  'pc');
let pro10 = new Product("/Case-Study-1/img/img-pc/pc4.jpg", 'PC GAMING HACOM 035', 16999000, 1,  'pc');
let products = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10];

function showProductLaptop() {
    let listlaptop = '';
    let listPc = '';
    for(let i = 0; i < products.length; i++) {
        if(products[i].type == 'laptop') {
        listlaptop +=
            `<div class="product">
                    <img src="${products[i].image}" alt="">
                    <h3>${products[i].name}</h3>
                    <p>Giá: ${products[i].price}</p>
                    <button onclick="addCart(${i})" class="addCart">Thêm vào giỏ hàng</button>
            </div>`
        }
        else if(products[i].type == 'pc'){
            listPc += 
            `<div class="product">
                    <img src="${products[i].image}" alt="">
                    <h3>${products[i].name}</h3>
                    <p>Giá: ${products[i].price}</p>
                    <button onclick="addCart(${i})" class="addCart">Thêm vào giỏ hàng</button>
            </div>`
        }
    };
    document.getElementById('list-laptop').innerHTML = listlaptop;
    document.getElementById('list-PC').innerHTML = listPc;

    
}
showProductLaptop();