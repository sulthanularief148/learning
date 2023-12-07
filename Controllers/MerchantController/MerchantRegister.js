const { merchant } = require("../../models/MerchantModel/Merchantmodel");

const insertMerchantDetails = async (req, res, error) => {
    try {
        const { merchantName, storeName, phoneNumber, openTime, closeTime } = req.body;

        // Input validation
        if (!merchantName || !storeName || !phoneNumber || !openTime || !closeTime) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // You can add more specific validation based on your requirements, e.g., phone number format, time format, etc.
        console.log(merchantName, storeName, phoneNumber, openTime, closeTime);
        const userExist = await merchant.findOne({ where: { phoneNumber: phoneNumber } });

        if (userExist) {
            console.error(error)
            return res.status(409).json({ message: "User Already Exists" });
        }
        const insertMerchant = await merchant.create({ merchantName, storeName, phoneNumber, openTime, closeTime });
        console.log(insertMerchant);

        if (!insertMerchant) {
            return res.status(500).json({ message: "Cannot Insert Merchant Details" });
        }

        return res.status(200).json(insertMerchant);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { insertMerchantDetails };
