let a = 300

if(true){
    let a = 10
    const b = 30
    console.log("INNER: ",a);
}

//console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "varun"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    
    two()
}

//one()

// ******************** interesting ********************

console.log(addone(5))

function addone(num){
    return num + 1
}

//addone(5)

addtwo(5)//error cause defined in const
const addtwo = function(num){
    return num + 2
}

//addtwo(5)
//two ways function is used