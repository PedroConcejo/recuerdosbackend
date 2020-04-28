const seeder = require('mongoose-seed')
const mongoose = require('mongoose')
const LocationModel = require('./api/models/location.model')

require('dotenv').config()

const USERS = require('./users.json')
const LOCATION = require('./location.json')
const CATEGORY = require('./category.json')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/location.model.js'])
  seeder.clearModels(['location'], function () {
    seeder.populateModels(LOCATION, function () {
      seeder.disconnect()
    })
  })
})

mongoose.connect(process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || 'test',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }, err => {
    if (err) { throw new Error(err) }
    console.info('💾 Connected to Mongo Database \n')
  })

let myid = ''
LocationModel
  .find()
  .then(res => { myid = res[0]._id })
  .catch(err => console.log(err))
console.log('hola')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/category.model.js'])
  seeder.clearModels(['category'], function () {
    seeder.populateModels(CATEGORY, function () {
      seeder.disconnect()
    })
  })
})

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/users.model.js'])
  seeder.clearModels(['user'], function () {
    seeder.populateModels(USERS, function () {
      seeder.disconnect()
    })
  })
})
