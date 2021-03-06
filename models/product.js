const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
            text: true,
        },
        slug:{
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description:{
            type: String,
            requiered: true,
            maxlength: 2000,
            text: true,
        },
        price:{
            type: Number,
            required: true,
            trim: true,
            maxlength: 8,
        },
        category:{
            type: ObjectId,
            ref: "Category",
        },
        quantity:Number,
        sold: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
        },
        shipping: {
            type: String,
            emun:["Yes", "No"],
        },
        brand: {
            type: String,
            enum:["Angus", "Wagyu", "Neuland", "Nacional", "Corte Criollo"],
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive"]
        },
    },
    {timestamps: true},
);
module.exports = mongoose.model("Product", productSchema);