// var manger = {
//     firstName : " john ",
//     lastName : " melede ",
//     age : " 28 ",
//     sallery : " 6,000 "
// }

// var officer = {
//     fullName : " dani abebe ",
//     dateOfBirth : " 26,12,1995 ",
//     email : " dani2342@mail.com ",
//     address : "haifa, neve david 26 st"

// }

// var fruit = {
//     name : " wattermelon ",
//     color : " green ",
//     typeOfFruit : "somthing"
// }
// document.writeln (fruit.name + "<br>" ,  fruit.color + "<br>" , fruit.typeOfFruit + "<br>");

// var calssRoom = {
//     numberOfClass : " 3 ",
//     numberOfStudent : " 5 ",
//     namesOfStudents : [" dani " , " sam " , " david " , " daniel " , " jacob " ]

// }
// for (var i = 0 ; i < calssRoom.namesOfStudents.length; i++){
//     document.write(calssRoom.namesOfStudents[i] + "<br>")
// }

// var myKey = prompt(" enter a key ");
// console.log(calssRoom[myKey]);

//  var kinderGarden = {
//      teacherName : " sima ",
//      numberOfchildernes : " 10 ",
//      childrenNames : [" dan "," sami " ," naten ", " or ", " lior ", " math ", " cali ", " dalia ", " chen ", ]
//     }
//     for (var i = 0 ; i < kinderGarden.childrenNames.length; i++){
        
//     document.write(kinderGarden["childrenNames"][i] + "<br>" );
//     }
//     var mykey = prompt("enter a key !");
//     document.write(kinderGarden[mykey]);

    // var myObject = {

    // };
    // var valueFromUser = prompt(" enter a value ");
    // var keyFromUser = prompt(" enter a key ");
    // myObject[keyFromUser] = valueFromUser;
    // myObject.name = prompt(" Enter a Name ");

    // console.log(myObject);



// var course = {

// }
// course.numberOfcourse = +prompt(" enter a classroom number ")
// course.numberOfStudent = +prompt("enter a Number of students!")
// console.log(course);


// var teacher = {

// };

// var nameFromUser = prompt(" enter a key name ")
// var valueFromUser = prompt("enter a value")
// teacher[nameFromUser] = valueFromUser;
// console.log(teacher);

// var officer = {

// };
// for (var i = 0 ; i < 4 ; i++){

//     var keyName = prompt("enter a key")
//     var valueName = prompt("enter a value")
//     officer[keyName] =valueName; 
// }    
// console.log(officer);

// var userName = {

// };
// for (var i = 0 ; i <= 4 ; i++ ){
//     var keyFromUser = prompt("enter a key name");
//     var valueFromUser = prompt("enter a value name") ;
//     userName[keyFromUser] = valueFromUser;
// document.write(" <div> " + valueFromUser + " </div> ");
// }
// var cars = {
//     company : " ",
//     color : " ",
//     kmPerHour : " ",
//     year : 0,
//     model : " ",
// };
// for (var i = 0 ; i< cars.length ; i++){
//     var carsValue = prompt("enter a value");
//     document.write("<h1>" + carsValue + "</h1>");
// }
// function someFunction(){
// var carsArray = [];
// for (var i = 0 ; i < 4 ; i++ ){
//     var cars = {};
//     cars.brand = prompt(" enter ");
//     cars.color = prompt(" enter ");
//     cars.model = prompt(" enter ");
//     cars.year = prompt(" enter ");
//     carsArray.push(cars)
//     document.write("<div>" + cars.brand + cars.color + cars.model +  cars.year + "</div>");
// }
// console.log(carsArray);
// }
// someFunction();

// function numbersInput () {
//     var catsArray = [];
//     for (i = 0 ; i < 4 ; i++){
//     var catsObject = {};
//     catsObject.name = prompt(" enter a name ")
//     catsObject.birthDay = +prompt(" enter a birthday ")
//     catsObject.brand = prompt(" enter a brand ")
//     catsObject.weight = +prompt(" enter a weight ")
//     catsArray.push(catsObject)
// document.write("<h1>" + catsObject.name + catsObject.birthDay +  catsObject.brand + catsObject.weight + "</h1>") ;
// }
// console.log(catsArray)
// }
// numbersInput()

// function dogFunction () {
//     var dogsArray = [];
//     var userNumber = +prompt("enter a number!");
//     for (i = 0 ; i < userNumber; i++ ){
//     var dogsObject = {};
//     dogsObject.name = prompt("enter a value");
//     dogsObject.age = prompt("enter a value");
//     dogsObject.type = prompt("enter a value");
//     dogsObject.owner = prompt("enter a value");
//     dogsArray.push(dogsObject);
// document.write("<p>" + dogsObject.name + dogsObject.age + dogsObject.type +  dogsObject.owner + "</p>")
//     }
// }
// dogFunction () 

// function bugsFunction(){
//     var bugsArray = [];
//     var numFromUser = +prompt("enter a number");
//     for(var i = 0; i<numFromUser; i++ ){
//         var bugsObject = {};
//         bugsObject.regularName = prompt(" enter a bug name ")
//         bugsObject.scientificName = prompt(" enter a bug scientificName ")
//         bugsObject.legsNumber = +prompt(" enter a legsNumber ")
//         bugsObject.bugsWings = confirm(" are the bug have a wings ")
//         if (bugsObject.bugsWings){
//                 document.write("<h3>" + bugsObject.regularName +" " + bugsObject.scientificName + " " + bugsObject.legsNumber + " " + bugsObject.bugsWings + "</h3>")
//                     kidsArray.push(bugsObject);
//         }
//     }
// }
// bugsFunction()

// function kidsFunction(){
//     var kidsArray = [];
//     var numberFromUser = prompt(" enter a number! ")
//     for (var i = 0; i < numberFromUser; i++ ){
//         var kidsObject = {};
//         kidsObject.fullName = prompt(" enter a full Name ")
//         kidsObject.age = +prompt(" enter a age ")
//         kidsObject.inTheKinderGarden = confirm(" are the kid in kindergarder ")
//         if(kidsObject.age>4){
//             document.write("<p>" + kidsObject.fullName+ " " + kidsObject.age+ " " + kidsObject.inTheKinderGarden +  "</p>")
//             kidsArray.push(kidsObject);
//         }
//     }
// }
// kidsFunction()

// function computerFunc(numberFromUser){
//     var computerArray = [];
//     for (var i = 0 ; i < numberFromUser; i++){
//         var computerObject = {};
//         computerObject.company = prompt("enter the company name");
//         computerObject.brand = prompt("enter the computer brand");
//         computerObject.weight = +prompt("enter the computer weight ");
//         computerObject.inStuck = confirm(" the computer is in stuck ");
        
//         if (computerObject.inStuck){
//             if(computerObject.weight>2){

//                 document.write("<p>" + computerObject.company + " " + computerObject.brand +" "+ computerObject.weight+ " " + computerObject.inStuck + "</p>");
//                 computerArray.push(computerObject);
//             }
//             console.log(computerArray);
//         }
//     }

// }
// computerFunc(prompt(" enter a number! "))

// function teacherFunc (numFromUser){
//     var teacherArray = []
//     for(var i = 0 ; i < numFromUser; i++){
//         var teacherObject = {};
//         teacherObject.fullName = prompt("enter full name ")
//         teacherObject.sallery = +prompt("enter sallery ")
//         teacherObject.mail = prompt("enter email ")
//         teacherObject.dateOfBirth = +prompt("enter date of birth ")

//         if(teacherObject.sallery>100){
//             if(teacherObject.dateOfBirth<1990){
//             }
            
//                             document.write("<span>" + teacherObject.fullName + " " + teacherObject.sallery +" "+ teacherObject.mail + " " + teacherObject.dateOfBirth + "</span>" + "<br>");
//                             teacherArray.push(teacherObject)
//         }
//     }

// }
// teacherFunc (prompt(" enter a number "))

// function furnitureFunc(numbersFromUser){
//     var arrayFurniture = []
//     var furnitureArray = []
//     for (var i = 0 ; i<numbersFromUser; i++){
//         var  furnitureObject = {};
//         furnitureObject.name = prompt("enter a name");
//         furnitureObject.brand = prompt("enter a brand");
//         furnitureObject.placeToBuy = prompt("enter a place to buy");
//         furnitureObject.price =prompt("enter a price");

//         furnitureArray.push(furniture.placeToBuy);
//         document.write(furniture.name + "<br>" +  furnitureArray);
//         arrayFurniture.push(furnitureObject)
//     }
//     console.log(furnitureArray)
// }
// furnitureFunc(+prompt(" enter a number "))

// function flatFunc(numberFromUser){
//     var WantsToBuy = [];
//     for(var i = 0; i < numberFromUser; i++ ){
//         var flatObjecrt = {}
//         flatObjecrt.address = prompt("enter the addres");
//         flatObjecrt.rentPrice = +prompt("enter the rent price");
//         flatObjecrt.salePrice = +prompt("enter the sale price");
//         flatObjecrt.whoItersting = prompt("enter who want the flat ");
//         flatObjecrt.trade = confirm(" there is a trade ");
        
//         WantsToBuy.push(flatObjecrt.whoItersting)

//         var whoItersting = +prompt("enter number of intersted people") 
//         for (var j = 0 ; j < whoItersting ; i++){
//             flatObjecrt.whoItersting.push(prompt("enter intersted people"))
//         }
//         if(!flatObjecrt.trade){
//             document.write(flatObjecrt.address + "<br>" + flatObjecrt.whoItersting );
//             for (var j = 0; j < flatObjecrt.whoItersting.length; j++)
//             document.write(whoItersting[i] + "<br>")
//         }
//     }
//     console.log(WantsToBuy)

// }
// flatFunc(+prompt("enter a number!"))

//  var whoItersting = +prompt("enter number of intersted people") 
//  for (var j = 0 ; j < whoItersting ; i++){
//      flatObjecrt.whoItersting.push(prompt("enter intersted people"))
//  }

// function cuntryFun(){
//     var cuntryArray = [];
//     var citiesArray = [];
//     var numberFromUser = +prompt("enter a number ")
//     for (var i = 0 ; i<numberFromUser; i++){
//         var cuntryObject = {};
//         cuntryObject.Name = prompt("enter the cuntry name");
//         cuntryObject.resident = +prompt(" enter resident  ");
//         cuntryObject.cities = prompt("enter the cities name");
//         cuntryObject.thereIsHabad = confirm("there is habad there");
        
//         citiesArray.push(cuntryObject.cities);
//         if(cuntryObject.thereIsHabad ){
//             document.write(cuntryObject.Name + "<br>" + citiesArray );
//             cuntryArray.push(cuntryObject);
//         }
//     }
//     console.log(citiesArray);
// }
// cuntryFun()

// function movieFunc (){
//     var movienum = +prompt("enter a number!")
//     for (i = 0 ; i<movienum; i++){
//         var movieObject = {};
        
//         movieObject.name = prompt("enter movie name  ")
//         movieObject.watchNumbers = +prompt("enter watch number ");
//         movieObject.year = +prompt("enter movie year  ");
//         movieObject.picture = +prompt("enter movie picture ");

//         document.write(movieObject.name+ "" + movieObject.watchNumbers+ "" + movieObject.year+ "" + movieObject.picture + "<br>")
//     }
// }
// movieFunc()