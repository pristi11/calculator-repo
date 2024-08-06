const  btncart=document.querySelector('#cart-out');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');

btncart.addEventListener('click',()=>{
cart.classList.add('cart-active')

})

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
    
    })

    document.addEventListener('DOMContentLoaded',loadfood);
    function loadfood(){//loading multiple purpurse in one function ,so iam giving load content function
        loadcontent();
    
    }

    function loadcontent(){
//remove food items frm cart


let btnremove=document.querySelectorAll('.cart-remove');
btnremove.forEach((btn) => {
    btn.addEventListener('click',removeitem);

});
    

     //number should be greater than1 not less than one
   // product item change
   let quantityitem=document.querySelectorAll('.cart-quantity');
   quantityitem.forEach((input) => {
       input.addEventListener('change',changeqty);
   
   });

   //add cart
   let btnaddcart=document.querySelectorAll('#addcart');
   btnaddcart.forEach((btn)=>{
btn.addEventListener('click',addcart);
   });

}

    //remove item
    function removeitem(){
        if(confirm('are you sure to remove')){
        this.parentElement.remove();
        }
    }

function changeqty(){
if(isNaN(this.value)||this.value<1){
    this.value=1;
}
}

//addcart
function addcart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.f1-price').innerHTML;
    let imgsrc=food.querySelector('.pic-img').src;
 //  console.log(title,price,imgsrc);


 let newProductElement=createcartproduct(title,price,imgsrc);
 let element=document.createElement('div');
 element.innerHTML=newProductElement;
let cartbasket=document.querySelector('.cart-content');
cartbasket.append( element);
loadcontent();

}

function createcartproduct(title,price,imgsrc){

    return`
    <div class="cart-box">
    <img src="${imgsrc}"  class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>`
}