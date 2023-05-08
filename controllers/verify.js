module.exports.verify = (req,res,next)=>{
    // try{

    // }catch(ex){
    //     next(ex);
    // }
    return res.status(200).json({msg:"Application running sucessfully",status:true})
}