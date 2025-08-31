const asyncHanadler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asyncHanadler}

// const asyncHanadler =(fn)=>async(req,res,next)=>{
//     try{

//     }
// }