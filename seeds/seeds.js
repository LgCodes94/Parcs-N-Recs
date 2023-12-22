const { sequelize } = require('../config/connection');
const { User, Park, UserPark } = require('../models');

const userData = require('./userData.json');
const parksData = require('./parksData.json');
const userParksData = require('./userParksData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const parks = await Park.bulkCreate(parksData);

    const userParks = await UserPark.bulkCreate(userParksData);


    process.exit(0);
};

seedDatabase();
