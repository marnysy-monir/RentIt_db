import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"],
    },
    lastName: {
        type: String,
        required: [true, "last name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "invalid email format"],
    },
    phone: {
        type: String,
        required: [true, "phone number is required"],
    },
    city: { type: String, required: [true, "city name is required"] },
    street: { type: String, required: [true, "street name is required"] },
    zip: { type: String, required: [true, "zip code is required"] },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password must be at least 6 characters"],
    },
    // tool: { type: mongoose.Schema.Types.ObjectId, ref: 'tool', required: true },
    // reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'reservation', required: true },
    // withdrawal: { type: mongoose.Schema.Types.ObjectId, ref: 'withdrawal', required: true },
}, { timestamps: true });

// const user = mongoose.model('user', UserSchema);
// export default user;

export default mongoose.model('user', UserSchema);


// this function  will fire after we save new user in the db (mongoose hooks)
// UserSchema.post('save', function (doc, next) {
//     console.log("new user was created and save", doc)
//     next();
// })
//fire function before save
// UserSchema.pre('save', function (next) {
//     console.log("user is about to be created", this)
//     next();
// })
