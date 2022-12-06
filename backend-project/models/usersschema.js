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
    /* role: {
        type: String,
        enum: [
            "user", "manager"
        ],
        default: "user"
    }, */
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
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
}, 
{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

usersSchema.virtual("fullName").get(function() {
    return this.fName+" "+this.lName
})

usersSchema.pre("save", function(next) {
    const hashedPassword = bcrypt.hashSync(this.password, 10)
    this.password = hashedPassword;

    next()
})

const UsersCollection = mongoose.model('User', usersSchema)

export default UsersCollection;


