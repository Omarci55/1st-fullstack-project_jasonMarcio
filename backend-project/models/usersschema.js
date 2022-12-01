import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({

    fName: {
        type:String, 
        required: true
    },
    lName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    }, 
    address: {
        type: String
    }, 
    city: {
        type: String
    }, 
    role: {
        type: String,
        enum: [
            "user", "manager"
        ],
        default: "user"
    },
    token: {
        type: String
    },
    profileImage: {
        type: String,
        default: function() {
            return `https://joeschmoe.io/api/v1/${this.fName}`
        }
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "orders"
        }
    ]
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})


