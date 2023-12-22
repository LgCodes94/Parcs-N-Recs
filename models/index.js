const User = require('./User');
const UserPark = require('./UserPark');
const Park = require('./Park');

//Park can belong to many Users
Park.belongsToMany(User,
  {
    through: {
      model: UserPark,
      unique: false
    }
  });

//User can belong to many Parks
User.belongsToMany(Park,
  {
    through: {
      model: UserPark,
      unique: false
    }
  });

module.exports = { User, Park, UserPark };
