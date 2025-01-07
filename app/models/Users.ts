import mongoose, { mongo, trusted } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        userId: {
            type: String, unique: true, required: true
        },
        email: {
            type: String, unique: true, required: true, max: 50
        },
        name: {
            type: String, min: 2, max: 50
        },
        isPro: Boolean,
        isProSince: Number,
        StripeCustomerId: String,
        StripeCustomerOrderId: String
    }, {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);
export default User;
