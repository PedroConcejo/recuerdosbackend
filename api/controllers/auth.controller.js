const UserModel = require('../models/users.model')
const PartnerModel = require('../models/partner.model')
const { handleError } = require('../utils')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  signup,
  login,
  signupPartner,
  loginPartner
}

function signup (req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  const userBody = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPwd,
    img: req.body.img,
    location: req.body.location
  }

  UserModel.create(userBody)
    .then(() => {
      const userData = {
        username: req.body.name,
        email: req.body.email
      }

      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '1w' }
      )

      return res.json({ token: token, ...userData })
    })
    .catch(err => {
      res.status(403).json({ error: err })
    })
}

function login (req, res) {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.json({ error: 'wrong email' })
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) { handleError(err, res) }
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.email}`
          })
        }

        const userData = { username: user.name, email: user.email }

        const token = jwt.sign(
          userData,
          process.env.SECRET,
          { expiresIn: '1h' }
        )

        return res.json({ token: token, ...userData })
      })
    })
    .catch(err => handleError(err, res))
}

function signupPartner (req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  const userBody = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPwd,
    img: req.body.img,
    location: req.body.location,
    partner: req.body.partner
  }

  PartnerModel.create(userBody)
    .then(() => {
      const userData = {
        username: req.body.name,
        email: req.body.email
      }

      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '1w' }
      )

      return res.json({ token: token, ...userData })
    })
    .catch(err => {
      res.status(403).json({ error: err })
    })
}

function loginPartner (req, res) {
  PartnerModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.json({ error: 'wrong email' })
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) { handleError(err, res) }
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.email}`
          })
        }

        const userData = { username: user.name, email: user.email }

        const token = jwt.sign(
          userData,
          process.env.SECRET,
          { expiresIn: '1h' }
        )

        return res.json({ token: token, ...userData })
      })
    })
    .catch(err => handleError(err, res))
}
