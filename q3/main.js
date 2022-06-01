function checkValidation(str){
    try{
       let user = JSON.parse(str);
    }
    catch(err){
        alert("JSON Error: " + err);
    }
}

console.log(checkValidation('{"name", "age": 30}'));