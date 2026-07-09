
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log(a);
    
}


// console.log(a);
// console.log(b);
// console.log(a);


function one(){
    const username = "gopi"

    function two(){
        const website = "instagram"
        // console.log(website);
        console.log(username);  
    }
    
    two()
    
}
// one()

if (true) {
    const username = "gopi"
    if(username === "gopi"){
        const website = " instagram"
        // console.log(username + website);
    }

}

// console.log(); 

// ++++++++++++ interesting ++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)