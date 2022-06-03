
new Promise(function(resolve, reject) {
    setTimeout(() => {
    throw new Error("Whoops!");
    }, 1000);
    }).catch(alert);


// As the code above runs as an implicit try catch, it would handeled the synchronous errors, but in
//above code the error is throwing later and the functionality is asynchronous. Finally the catch will not be trigerred.