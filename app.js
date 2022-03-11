
const container = document.querySelector('.container');
const count=document.getElementById("count");
const total=document.getElementById("total");
const select=document.getElementById("movie");
const film =document.getElementById("film");
const seat=document.getElementsByClassName("seat")
const seats=document.querySelectorAll(".seat:not(.occupied)")



container.addEventListener("click",(e)=>{
    // console.log(e.target)

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // console.log(e.target);

        e.target.classList.toggle("selected");
        calculateTotal();
      

        
    }
})

select.addEventListener("change",(e)=>{
    calculateTotal();

})


function calculateTotal(){

    const selectedSeats=container.querySelectorAll(".seat.selected");

    // console.log(seats);
    console.log(selectedSeats);
//////////////
    const selectedSeatArr=[];
    const seatArr=[];

    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat)
    });
    seats.forEach((seat)=>{

        seatArr.push(seat);

    })
    //spread ile yapablrz
//////////////////////////////////

    let selectedSeatIndex=selectedSeatArr.map((seat)=>{
        return seatArr.indexOf(seat);
    });
    console.log(selectedSeatIndex);

    // let selectedSeatCount =container.querySelectorAll(".seat.selected").length;
    //    console.log(selectedSeatCount);
        
    // let price=select.value;

    let selectedSeatCount=selectedSeats.length;
    count.innerText=selectedSeatCount;
    total.innerText=selectedSeatCount*select.value;
    film.innerText=select.options[select.selectedIndex].innerText.split("(")[0];

    function saveToLocalStorage(indexs){
        localStorage.setItem("selectedSeats",JSON.stringify(indexs));
        localStorage.setItem("selectedMovieIndex",select.selectedIndex)
    }


    saveToLocalStorage(selectedSeatIndex);

}




// let selectedFilmCount=container.querySelectorAll(".movie.container");

// film.innerText=selectedFilmCount