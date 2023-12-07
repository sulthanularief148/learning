/*
 * ========================
 * Module: exampleModule
 * Author: Sulthanul Arief
 * Description: This module does XYZ.
 * ========================
 * 
 * 
 * Title : Add column :
 *  sequelize.queryInterface.addColumn("MerchantServicesSchemas", "merchantId", {
     type: DataTypes.INTEGER,
     references: {
         model: "merchants", 
         key: "id"
     }
 } )


Comment 2:
 * Title 2: Set Foreign Key
 merchant.hasOne(MerchantServicesSchema, {foreignkey: "merchantId" })
 * 
 * 
 * ANSI color code 
 * const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/