const {poolPromise}=require('../../database');

const getDemoModel=async()=>{
    try {
        let q=`EXECUTE SP_GET_DEMO_CASE_DETAILS`;
        return await executeQuery(q);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

const executeQuery=async(query)=>{
    try {
        let pool=await poolPromise;
        return await pool.query(query)
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
}


module.exports={
    getDemoModel,
    executeQuery
}