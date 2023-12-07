const express = require("express");
const router = express.Router();



const {insertMerchantDetails } = require("../Controllers/MerchantController/MerchantRegister");
const { insertMerchantServicesDetails } = require("../Controllers/MerchantController/MerchantServiceRegister")
const  { insertCustomerDetails }  = require("../Controllers/CustomerController/CustomerController")

router.post("/merchant", insertMerchantDetails);
router.post("/merchant-services", insertMerchantServicesDetails)
router.post("/customer",insertCustomerDetails )












module.exports = router;
