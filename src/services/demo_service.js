const {getDemoModel}=require('../models/demo_model')

const getDemoService=async()=>{
    try {
        let result=await getDemoModel()
        console.log("ppppp",result);
        return{status: 200,message:'success',data:result.recordset}
    } catch (error) {
        console.log("error",error);
        throw new Error 
    }
}

module.exports={
    getDemoService
}