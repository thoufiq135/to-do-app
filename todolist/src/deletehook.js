async function Usedelete(deletedata){
    // console.log("getting",deletedata)
    try{
         const data= await fetch(`https://server-todo-list-170l.onrender.com/${deletedata}`,{
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