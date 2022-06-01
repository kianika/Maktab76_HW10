function checkValidation(str){
    try{
        JSON.parse(str)
    }
    catch(err){
        alert("JSON Error: " + err);
    }
}

console.log(checkValidation('{"first_name":"Tony","last_name":"Hawk","age":31}'));