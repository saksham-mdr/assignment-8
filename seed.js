const Tracker = require('./models/tracker');



const tracks = [{
        fname: 'HELLO',
        lname: 'WORLD',
        desc: "entered",
        email: "HELLO@gmail.com",
        etime: "defalut",

        edate: "defalut"
    },

];


const seedDB = async() => {

    await Tracker.deleteMany({});
    await Tracker.insertMany(tracks);
    console.log('DB Seeded');
}

module.exports = seedDB;