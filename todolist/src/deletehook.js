async function Usedelete(deletedata){
    // console.log("getting",deletedata)
    try{
         const data= await fetch(`http://localhost:8000/${deletedata}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }
         })
         if(data.ok){
            let result=await data.json();
            return result;            
         }
    }catch(e){
        console.log("erroe=",e.message)
    }
}
export default Usedelete;