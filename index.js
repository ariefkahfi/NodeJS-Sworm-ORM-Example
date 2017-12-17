var sworm = require("sworm");


var db = sworm.db({
   driver : "mysql",
   config: {
       user:"arief",
       password:"arief",
       host:"localhost",
       database:"sworm_db2"
   }
});



//many to many using bridge table
var office = db.model({table : "office"});
var officeBranch = db.model({table : "office_branch" , id : ["office_id","branch_id"]});
var branch = db.model({table : "branch"});


// db.query("update branch set country = @c_update where id = @id " ,
//     {c_update: "Egypt hello" , id : 4})
//     .then(function () {
//         console.log("update works");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// save many to many with existed data in both tables
// branch.query("select * from branch where id = @id",{id : 4})
//     .then(function (branch) {
//         officeBranch({
//             office_id : 2,
//             branch : branch[0]
//         }).save().then(function () {
//            console.log("hola");
//         },function (err) {
//             console.log(err);
//         });
//     }).catch(function (err) {
//         console.log(err);
// });


// office.query("select * from office where id = @id ",{
//     id : 1
// }).then(function(officeA){
//     var mesir = branch(
//         {
//             country : "Egypt",
//             officeBranch : function(mesir_id){
//                 return[
//                     officeBranch({office : officeA[0] , branch : mesir_id})
//                 ]
//             }
//         }
//         );
//
//     var arab = branch({
//         country: "Saudi arabia",
//         officeBranch : function(arab_id){
//             return[
//                 officeBranch({office : officeA[0] , branch: arab_id})
//             ]
//         }
//     });
//
//     mesir.save().then(function () {
//
//     },function (er) {
//         console.log(er);
//     });
//     arab.save().then(function () {
//
//     },function (err) {
//         console.log(err);
//     });
// }).catch(function (err) {
//     console.log(err);
// });


// many to many save entities example
// var officeA = office({name : "Office A"});
// var officeB = office({name : "Office B"});
//
// var branch1 = branch({
//     country : "Indonesia",
//     officeBranch : function(branch_id){
//         return[
//             officeBranch({office : officeA , branch : branch_id}),
//             officeBranch({office : officeB , branch : branch_id})
//         ]
//     }
// });
//
// var branch2 = branch({
//     country: "USA",
//     officeBranch  : function(branch_id){
//         return[
//             officeBranch({office : officeB , branch : branch_id})
//         ]
//     }
// });
//
// branch1.save().then(function () {
//
// },function (err) {
//     console.log(err);
// });
//
// branch2.save().then(function () {
//
// },function (err) {
//     console.log(err);
// });


//one to one example model (unidirectional)
// var player = db.model({table:"player"});
// var card = db.model({table:"card"});



// delete example
// db.statement("delete from card where player_id = @id ",{id : 5})
//     .then(function () {
//        console.log("card deleted");
//        db.statement("delete from player where id = @id ",{id:5})
//              .then(function () {
//                  console.log("player deleted");
//              }).catch(function (err) {
//                 console.log(err);
//              });
//     },function (err) {
//         console.log(err);
//     });


// var arief = player({
//     name: "Arief kahfi",
//     position : "front end dev",
//     card : function(arief_id){
//         return[
//             card({
//                 country: "USA",
//                 player : arief_id
//             })
//         ]
//     }
// });
//
// var putro = player({
//     name : "Putro Haza",
//     position : "front end dev",
//     card : function(putro_id){
//         return[
//             card({
//                 country:"California",
//                 player : putro_id
//             })
//         ]
//     }
// });
//
// arief.save().then(function () {
//
// },function (err) {
//     console.log(err);
// });
//
// putro.save().then(function () {
//
// },function (err) {
//     console.log(err);
// });



//hanya sample
//one to many
//person ke addresses
// 1 person mempunyai banyak address
// banyak address hanya untuk satu person
// var person = db.model({table: "person",});
// var addresses = db.model({table:"addresses"});


// one to many save entities model example (1)
// var peter = person({
//     name : "Peter brown",
//     addresses : function(peter){
//         return [
//             addresses({address_name : "snow street", person : peter}),
//             addresses({address_name : "summer street" , person : peter})
//         ]
//     }
// });
//
// peter.save().then(function () {
//    console.log("data is saved");
// },function (err) {
//     console.log(err);
// });


// one to many save entities model example (2)
// var Ben = person({
//     name : "Ben",
//     addresses : [aRoad,bRoad]
// });
//
// aRoad.person = Ben;
// bRoad.person = Ben;
//
//
// Ben.save().then(function(){
//     console.log("Ben is saved");
// },function (err) {
//     console.log(err);
// })


//many to one save entites example
// person.query("select * from person where id = @id ",
//     {
//         id : 4
//     }
// ).then(function(person){
//     var jackStreet=  addresses({
//         address_name : "Ben street",
//         person : person[0]
//     });
//
//     var onlyStreet = addresses({
//         address_name : "Only street",
//         person : person[0]
//     });
//
//     jackStreet.save().then(function () {
//         console.log("jackstreet is saved to ben");
//     },function (err) {
//         console.log(err);
//     });
//
//     onlyStreet.save().then(function () {
//         console.log("onlyStreet is saved to ben");
//     },function (err) {
//         console.log(err);
//     })
// }).catch(function(err){
//     console.log(err);
// });

//select query with relationship data

// db.query(`
//     select p.name , a.address_name
//     from person p inner join addresses a
//     on p.id = a.person_id
//     where p.id = @id
// `,{id:2}).then(function (value) {
//     value.forEach(function (value2) {
//        console.log(value2.name + "||" + value2.address_name);
//     });
// },function (reason) { console.log(reason); });

//get person and save addresses with existed person
// var a= person.query("select * from person where id = @id",{id:1});
// a.then(function(val){
//     var anggur = addresses({
//         address_name:"Jln Anggur no 10",
//         person:val[0]
//     });
//     anggur.save().then(function(){
//         console.log("Jln anggur is saved");
//     },function(err){
//         console.log("anggur error");
//         console.log(err);
//     });
// }).catch(function (reason) {
//     console.log("error get query for person");
//     console.log(reason);
// });