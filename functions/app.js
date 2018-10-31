
export function AppReadyState(options){
    let result = true;
    let invalids = [];
    options.map(option => {
        option.required.map(re => {
            if(option.in.obj[re] === null){
                if(!invalids.includes(option.in.name)){
                    invalids.push(option.in.name)
                }
                result = false;
            }
        });
    })
    return {
        invalids,
        result
    };
}
