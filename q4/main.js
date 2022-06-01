let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
    });
    promise.then(alert);



    //answer : resolve/reject expect only one argument (or none) and will ignore additional arguments.
    