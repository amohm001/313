/* Amire Mohmed
   csc313 Assignment 1
   Vehicle Rental Javascript
   */




function rentVehicle(id){
  var i;
  for(i = 0; i < carList.length; i++){
    if(carList[i].id == id){
      if(carList[i].is_rented == false){
        console.log("The car with that id is available.");
        carList[i].is_rented = true;
        console.log("The car with that id has now been rented.");
        
      }
      else{
        console.log("The car is already rented");
        return i;
      }
    }
  }
}
function returnVehicle(id){
  var i;
  for(i = 0;i < carList.length;i++){
    if(carList[i].id == id){
      if(carList[i].is_rented){
        carList[i].is_rented = false;
        console.log("The car has been Returned");
        return i;
      }
      else{
        console.log("The car was never rented at first.");
        return i;
      }
    }
  }
}
function addVehicle(make,model,color){
  let j = carList.length - 1;
  let id = carList[j].id + 1;
  let is_rented = false;
  carList.push({id,make,model,color,is_rented});
  return carList;
}
function removeVehicle(id){
  var i;
  
  for(i = 0;i < carList.length;i++){
    if(carList[i].id == id){
      delete carList[i];
    }
  }
}
function car(id, make, model, color){
  return {id : id, make : make, model : model, color : color, is_rented : false}  
  
}
let carList = [
  car(1, 'Toyota', 'Camry', 'White'),
  car(2,'Nissan', 'Altima', 'Blue')
];


addVehicle('Honda', 'fast', 'red');

console.log(carList[2]);
rentVehicle(3);
console.log(carList[2])
