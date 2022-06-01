/* promise.then(f1).catch(f2);

in the above example, the nested catch is available. If some error occured during the executing of f1, the error
will handeled with catch and will pass to next function.

Versus:
promise.then(f1, f2);
in above example there is no catch or then, therefore if f1 has error, the error has no way to pass and it could not be handeled here. */


