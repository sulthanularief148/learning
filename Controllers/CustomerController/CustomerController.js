const { CustomerSchema } = require("../../models/CustomerModel/CustomerModel")


const insertCustomerDetails = async (req, res) => {
    try {
        const { customerName, customerPhoneNumber, emailId, gender, state, district, city, pincode } = req.body;

        // Input validation
        if (!customerName || !customerPhoneNumber || !emailId || !gender || !state || !district || !city || !pincode) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // You can add more specific validation based on your requirements, e.g., phone number format, time format, etc.
        console.log(customerName, customerPhoneNumber, emailId, gender, state, district, city, pincode)

        // Insert Customer data into DB
        const insertCustomerDetails = await CustomerSchema.create({ customerName, customerPhoneNumber, emailId, gender, state, district, city, pincode });
        console.log(insertCustomerDetails);

        if (!insertCustomerDetails) {
            return res.status(500).json({ message: "Cannot Insert Merchant Details" });
        }

        return res.status(200).json({customerName, customerPhoneNumber, emailId, gender, state, district, city, pincode});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { insertCustomerDetails }