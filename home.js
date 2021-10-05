

var price='';
var status='';
var imageSrc='';
var locationLink='';
var county='';
var proparties = new Array(3);

var rowOne =new Array(3);
const Proparty = function(price, status, imageSrc, locationLink, county){
  this.price = price;
  this.status = status;
  this.imageSrc = imageSrc;
  this.locationLink = locationLink;
};


const renderProparty= function (proparty) {
  //for (var i = 0; i < proparties.length; i++) {



    var html = `<li id="thisHouse">
    <img src="${proparty.imageSrc}" alt="">
    <span>PRICE: $${proparty.price}</span>
    <button id="by" type="button" name="button">BUY & RENT</button>
    <button id="description" type="button" name="button">DESCRIPTIONS</button>
  </li>`;
     //console.log(proparties[i]);
    rowOne = document.querySelector(".rowOne");
    rowOne.insertAdjacentHTML('beforeend', html);
  // const div = document.querySelector(".infoDescription");
  //}


};




const dataProparty = function () {
  fetch("https://real-estate12.p.rapidapi.com/listings/sale?state=CA&city=Los%20Angeles&page=1&sort=relevant&type=single-family%2Cmulti-family", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "real-estate12.p.rapidapi.com",
  		"x-rapidapi-key": "dbf83a50d6mshd20d78f502f406bp15c25ajsn724cd01be1eb"
  	}
  })
  .then(function (response) {

    return response.json();
  })
  .then(function (data) {


for (var i = 0; i < 3; i++) {
var random = new Array(3)
  random[i] = Math.floor(Math.random() * (41 - 0 + 1) + 0);

 price = data.properties[random[i]].list_price;
 status = data.properties[random[i]].status;
 imageSrc = data.properties[random[i]].photos[0].href;
 locationLink = data.properties[random[i]].location.street_view_url;
 county =data.properties[random[i]].location.county.name;
 //console.log(locationLink);

 proparties[i] = new Proparty(price, status, imageSrc, locationLink, county);
//console.log(proparties[i]);

renderProparty(proparties[i]);

 /*renderPropartyRow0ne(house1,house2,house3,data);
 renderPropartyRowTwo(house4,house5,house6,data);*/



}

  }).catch(err => {
  	console.error(err);
  });



};




setTimeout(()=>{
dataProparty();

},100);


function refreshBTN() {
  setTimeout(()=>{
  dataProparty();

  },100)
};

$(function(){
const currentHouse = $(".rowOne > #thisHouse");
console.log(currentHouse);
const btns = $(".rowOne > #thisHouse>button");
console.log(btns);



btns.hide();
currentHouse.on('mouseenter',function() {
btns.show();
});

currentHouse.on('mouseleave',function() {
btns.hide();
});

});
