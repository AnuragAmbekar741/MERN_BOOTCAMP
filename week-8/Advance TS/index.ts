//Way to define arr type
type NumberArr = number[]

//Way to define return type of a function 
function getFirstEle(arr:NumberArr):number{
    return arr[0]
}

let ans = getFirstEle([1,2,3])
console.log(ans)


type input = (number | string)[]

function getFirstEle2(arr:input){
    return arr[0]
}



let ans2 = getFirstEle2(['a','b','c'])
console.log(ans2)
// ans2.toUpperCase()

function getFirstEle3<G>(arr:G[]):G{
    return arr[0]
}

let ans3 = getFirstEle3([1,3,5,6])
let ans4 = getFirstEle3(['a','b','c'])
ans4.toUpperCase()


function swap<G>(input1:G,input2:G):[G,G]{
    return [input2,input1]
}

let sol = swap(1,2)

function swap2<G1,G2>(input1:G1,input2:G2):[G2,G1]{
    return [input2,input1]
}

const swapArw = <T1,T2>(ip1:T1,ip2:T2):[T2,T1]=>{
    return [ip2,ip1]
}

let sol2 = swap2(1,'a')


interface Todo{
    title:string
    desc:string
    id:number
    status:boolean
}

type UpdataTodoInput = Partial<Todo>

function updateTodo(id:number,todo:UpdataTodoInput){
    
}
