const { busService } = require("../services");

/* Create bus */
const createBus = async (req , res) =>{
    try {
        const reqBody = req.body;

        const bus = await busService.createBus(reqBody);
        if(!bus){
            throw new Error ("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success : true,
            message : "bus created successfully",
            data : bus
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message:error.message
        });
    }
};

/* get bus list */
const getBusList = async(req , res) =>{
    try {
        const getList = await busService.getBusList(req , res);

        res.status(200).json({
            success:true,
            message: "get bus list successfully",
            data : getList
        });

    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

/* delete bus*/
const deleteBus = async(req,res) =>{
    try {
        const busId = req.params.busId;
        if(!busId){
            throw new console.Error("bus not found");
        }

        await busService.deleteBus(busId);

        res.status(200).json({
            success: true,
            message: "bus deleted successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

module.exports= {
    createBus,
    getBusList,
    deleteBus
}