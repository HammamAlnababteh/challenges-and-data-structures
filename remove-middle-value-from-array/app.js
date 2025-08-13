function remove_middle_value(arr){
    let newarr=[];
    let j=0;
    let middle=Math.floor(arr.length/2);
    for (let i=0; i<arr.length ; i++){
        
        if(middle===i)
            {
                continue ;
            }
        else
            {
                newarr[j]=arr[i];
                j++;
            }
    }
    return newarr;
}
console.log(remove_middle_value([7,9,13,25,5,17]));