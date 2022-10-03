



var harmburger=document.querySelector(".hamburger-menu")
// console.log(harmburger)


var mobilelinkscontainer=document.querySelector('.mobile-linkholder')

function addandremove(){
    harmburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle("showmobilelinks")
}