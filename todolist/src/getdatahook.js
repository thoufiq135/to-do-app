async function Useget(){
try{
    const response=await fetch("http://localhost:8000",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    if(response.ok){
        const result=response.json()
        return result;
    }else{
        return response
    }
}catch(e){
    return e
}
}


export default Useget;