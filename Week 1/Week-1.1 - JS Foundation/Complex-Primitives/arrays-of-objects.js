const allUsers = [
    {
        firstName: "Rajneesh",
        gender: "Male",
        address: {
            street: "Faizullapur",
            city: "Soehara",
            state: "Uttar-Pradesh",
            pincode: "246746"
        }
    },
    {
        firstName: "Somi",
        gender: "Female",
        address: {
            street: "Bansal",
            city: "Dhampur",
            state: "Uttar-Pradesh",
            pincode: "246745"
        }
    },
    {
        firstName: "Piyush",
        gender: "Male",
        address: {
            street: "ABC",
            city: "Farukhabad",
            state: "Uttar-Pradesh",
            pincode: "246744"
        }
    }
];
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["address"]["pincode"] == "246746"){
        console.log(allUsers[i]["firstName"]);
    }
}