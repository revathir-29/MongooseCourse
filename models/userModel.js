const mongoose = require ('mongoose');

//Schema
const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min : 10,
        max : 30,
        validate : {
            validator : v => v%2 ==0,
            message : props => `${props.value} is not a even number`
        }
    },
    email : {
        type : String,
        required: true,
        uppercase : true
        //lowercase : true
    },
    createdAt : {
        type : Date,
        //default : new Date
        default : () => Date.now()
    },
    UpdatedAt : Date,
    //bestFriend : mongoose.SchemaTypes.ObjectId,
    bestFriend : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'User'
    },
    hobbies : [String],
    address : addressSchema
});

//Schema methods
userSchema.methods.sayHi = function() {
    console.log(`My Name is ${this.name}`);
}

//Create static method
userSchema.statics.findByName = function(name) {
   return this.find({name: name});
   //return this.find({name: new RegExp(name, "i")});
}

userSchema.query.byName = function(name) {
    return this.where({name: name});
}

//Schema virtuals
/*
userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`;
})
    */

//Schema middleware
//pre - before something happens
userSchema.pre('save' , function(next) {
    this.name = `Mr . ${this.name}`;
    next();
})

//after happens
userSchema.post('save' , function(doc, next) {
    doc.name = `${doc.name} modified`;
    //doc.sayHi();
    next();
})

//Models
const userModel = mongoose.model('User' , userSchema);

module.exports = userModel;
