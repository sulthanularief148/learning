const { MerchantServicesSchema } = require("../../models/MerchantModel/MerchantServicesModel")

const insertMerchantServicesDetails = async (req, res, error) => {
    try {
        const {hairCutting, shaving, hairCutShaving, hairStraightening, hairColoring,others } = req.body;

        // Input validation
        if (!hairCutting || !shaving || !hairCutShaving || !hairStraightening || !hairColoring || !others) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // You can add more specific validation based on your requirements, e.g., phone number format, time format, etc.
        console.log(hairCutting, shaving, hairCutShaving, hairStraightening, hairColoring,others);


        // Insert Merchant services data into DB
        const insertMerchantServices = await MerchantServicesSchema.create({ hairCutting, shaving, hairCutShaving, hairStraightening, hairColoring,others});
        console.log(insertMerchantServices);

        if (!insertMerchantServices) {
            return res.status(500).json({ message: "Cannot Insert Merchant Details" });
        }

        return res.status(200).json(hairCutting, shaving, hairCutShaving, hairStraightening, hairColoring,others);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { insertMerchantServicesDetails };
