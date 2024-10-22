const mongoose = require ('mongoose');
const User = require('./models/userModel')

mongoose.connect('mongodb://127.0.0.1:27017/mongooseUser').then(() => {
    console.log('Connected');
}).catch(() => {
    console.log('Connection error...')
})

//create model obj
/*
const user = new User({
    name: "Mila",
    age: 26
});

// user.save().then(() => {
//     console.log('User saved');
// })
async function run() {
    const newuser = await user.save();
    console.log(newuser);
}
run();
*/

async function run() {
    try {
        /*
        const newuser = await User.create({
            name: "Mila",
            age: 28,
            //email validation
            email : "Mila@gmail.com",
            //new fields
            hobbies: ['Sports' , 'Music'],
            address : {
                street : 'ABC Street'
            }
    });
    //newuser.name = 'Moon';
    //await newuser.save();
    console.log(newuser);
    */
    //const user = await User.find({name : "Mila"});
    //const user = await User.findOne({name : "Mila"});
    //const user = await User.findById('66fa76a2dc0025301baec1cf');
    //const user = await User.exists({name : "Mila"});
    //const user = await User.where('name').equals('Mila');
    //const user = await User.where('age').lt(10);
    //const user = await User.where('age').gt(10).limit(1);
    /*    
    const user = await User
    .where('id')
    .equals('66fa76a2dc0025301baec1cf')
    .populate('bestFriend');
    */
   //Schema methods
   /*
    const user = await User.findOne({name: 'Mymoon'});
    user.sayHi();
    console.log(user);
    */

   //const user = await User.findByName('Mila');
   //console.log(user);

//    const user = await User.find().byName('Moon');
//    console.log(user);

//Schema virtuals
/*
const user = await User.findById('66fa86b67e073d4a2513aabe');
console.log(user);
console.log(user.namedEmail)
*/

//Schema middleware
const user = await User.findById('66fa86b67e073d4a2513aabe');
user.name = 'Tony';
user.age = 12;
await user.save();

console.log(user);



} catch(e) {
    console.log(e.message)
    //console.log(e.errors)
}
}
 run();


