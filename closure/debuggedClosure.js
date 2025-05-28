function createFunctionList() {
    let functions = [];

    for (let i = 0; i < 5; i++) { // Use block scoped variable ex: let
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

const funcs = createFunctionList();
funcs[0]();
funcs[1]();
funcs[2]();
funcs[3]();
funcs[4]();
