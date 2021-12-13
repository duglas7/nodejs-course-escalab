const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: ObjectId,
                    ref: "Product",
                },
                count: Number,
            },
        ],
        paymentIntent: { },
        orderStatus:{
            type: String,
            default: "Not processed",
            enum: [
                "Not processed",
                "Cash On Delivery",
                "Processing", "Dispatched",
                "Cancelled",
                "Completed"
            ],
            orderBy:{ type: ObjectId, ref: "User" },
        },
    },
    {timestamps: true},
);
module.exports = mongoose.model("order", orderSchema);