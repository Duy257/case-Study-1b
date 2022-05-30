function showModal() {
    document.querySelector('.modal').classList.add('open');
    showProductCart()

}

function closeModal() {
    document.querySelector('.modal').classList.remove('open');
    showProductCart()
}

// End phần đóng mở tab


// Open phần giỏ hàng
let dataCart = JSON.parse(localStorage.getItem('dataCart')) ? JSON.parse(localStorage.getItem('dataCart')) : [];
function addCart(index){
    if(dataCart.length == 0) {
        dataCart.push(products[index]);
    } else {
        let c = 0;
        for(let i = 0; i < dataCart.length; i++){
            if(dataCart[i].name == products[index].name){
                dataCart[i].quantity++;
                c = 1;
                break;
            }
        }
        if(c == 0){
            dataCart.push(products[index]);
        }
    }
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
    alert('Thêm vào giỏ hàng thành công!')
    showProductCart();
}


function showProductCart(){
    let dataCart = JSON.parse(localStorage.getItem('dataCart'));
    // console.log(dataCart[i]);
    let showArrCart = "";
    let allPrice = 0;
    let totalPrice = 0;
    for(i = 0; i < dataCart.length; i++){
        totalPrice += (dataCart[i].price*dataCart[i].quantity);
        showArrCart += `
            <div>
                <div>
                    <img src="${dataCart[i].image}" alt="">
                </div>
                <div>
                    <p class="name">${dataCart[i].name}</p>
                    <p>Giá: ${dataCart[i].price}</p>
                </div>
                <div class="quantity">
                    <button onclick="reduce(${i})">-</button>
                    <input type="text" value="${dataCart[i].quantity}">
                    <button onclick="more(${i})">+</button>
                </div>
                <span>${dataCart[i].price*dataCart[i].quantity}</span>
                <button class="delete" onclick="xoa(${i})">Xoá</button>
            </div>`
    };
    allPrice += totalPrice;
    document.getElementById('arrCart').innerHTML = showArrCart;
    document.getElementById('totalprice').innerHTML = allPrice;
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
};
showProductCart();


// nút thêm bớt
function more(i) {
    let dataCart = JSON.parse(localStorage.getItem('dataCart'));
    console.log(dataCart)
    dataCart[i].quantity++
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
    showProductCart()
    
    
}

function reduce(i) {
    let dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if(dataCart[i].quantity > 0) {
        dataCart[i].quantity--;
    }; 
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
    showProductCart()
}

//nút xoá
function xoa(i) {
    let dataCart = JSON.parse(localStorage.getItem('dataCart'));
    let a = confirm('Bạn có muốn xoá không?')
    if(a == true) {
        dataCart.splice(i, 1);
        products.splice(i, 1);
    }
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
    showProductCart();
}

function pay() {
    let a = confirm('Bạn có muốn thanh toán');
    if (a == true) {
        alert('Thanh toán thành công.')
    }
}
