const seeder = require('mongoose-seed')
require('dotenv').config()

const USERS = require('./users.json')
const LOCATION = require('./location.json')
const CATEGORY = require('./category.json')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/users.model.js'])
  seeder.clearModels(['user'], function () {
    seeder.populateModels(USERS, function () {
      seeder.disconnect()
    })
  })
})

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/location.model.js'])
  seeder.clearModels(['location'], function () {
    seeder.populateModels(LOCATION, function () {
      seeder.disconnect()
    })
  })
})

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/category.model.js'])
  seeder.clearModels(['category'], function () {
    seeder.populateModels(CATEGORY, function () {
      seeder.disconnect()
    })
  })
})
