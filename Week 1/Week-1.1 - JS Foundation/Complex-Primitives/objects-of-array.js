const userGroups = {
    maleUsers: [
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
            firstName: "Piyush",
            gender: "Male",
            address: {
                street: "ABC",
                city: "Farukhabad",
                state: "Uttar-Pradesh",
                pincode: "246744"
            }
        }
    ],
    femaleUsers: [
        {
            firstName: "Somi",
            gender: "Female",
            address: {
                street: "Bansal",
                city: "Dhampur",
                state: "Uttar-Pradesh",
                pincode: "246745"
            }
        }
    ]
};

// Accessing element
console.log(userGroups.maleUsers[0].firstName);
console.log(userGroups.maleUsers[1].firstName);
console.log(userGroups.femaleUsers[0].firstName);

// looping through the arrays
for(let i=0;i<userGroups.maleUsers.length;i++){
    console.log(userGroups.maleUsers[i].address.city);
}

// using a 'for....of loop:
for(const user of userGroups.femaleUsers){
    console.log(user.firstName);
}

// Adding new element
userGroups.maleUsers.push({
    firstName: "Amit",
    gender: "Male",
    address: {
        street: "XYZ",
        city: "Bareilly",
        state: "Uttar-Pradesh",
        pincode: "246743"
    }
});

userGroups.femaleUsers.push({
    firstName: "Neha",
    gender: "Female",
    address: {
        street: "LMN",
        city: "Kanpur",
        state: "Uttar-Pradesh",
        pincode: "246742"
    }
});

// function to print something

function printUserAddresses(userGroups) {
    for (const user of userGroups.maleUsers) {
        console.log(`${user.firstName} lives at ${user.address.street}, ${user.address.city}`);
    }
    for (const user of userGroups.femaleUsers) {
        console.log(`${user.firstName} lives at ${user.address.street}, ${user.address.city}`);
    }
}

printUserAddresses(userGroups);
