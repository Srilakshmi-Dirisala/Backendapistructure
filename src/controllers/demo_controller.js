const {getDemoService}=require('../services/demo_service')

const getDemoController=async(req,res)=>{
    callservices(getDemoService,req,res)
}

const callservices=async(method,req,res)=>{
    try {
        var result=await method(req)
        res.status(200).json({
            status:result.status,
            message:result.message,
            data:result.data
        })
    } catch (error) {
        res.status(400).json({
            status:result.status,
            message:result.message,
            data:result.data
        })
    }
}

module.exports={
    getDemoController
}