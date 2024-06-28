const allUsers = [
    {
        firstName: "Rajneesh",
        lastName: "Kumar",
        age: 23,
        gender: "Male"
    },
    {
        firstName: "Khushiram",
        lastName: "Singh",
        age: 23,
        gender: "Male"
    },
    {
        firstName: "Somi",
        lastName: "H",
        age: 23,
        gender: "Female"
    }

];
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "Male"){
        console.log(allUsers[i]["firstName"]);
    }
}