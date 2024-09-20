const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const btn= document.querySelector('.btnLogin-popup');


loginlink.addEventListener('click' , ()=>{
    wrapper.classList.add('active');
});

btnpopup.addEventListener('click' ,() =>{
    wrapper.classList.add('active.popup');
} );
