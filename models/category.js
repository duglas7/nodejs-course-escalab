const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "Name is required",
            minlength: [3, "Too short"],
            maxlength: [40, "To long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive"],
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Category", categorySchema);