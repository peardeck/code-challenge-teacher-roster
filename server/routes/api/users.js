const mongoose = require('mongoose');
const router = require('express').Router();
const Users = mongoose.model('Users');

router.post('/', (req, res, next) => {
  const { userBody } = req;

  if(!userBody.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!userBody.firstName) {
    return res.status(422).json({
      errors: {
        firstName: 'is required',
      },
    });
  }

  if(!userBody.lastName) {
    return res.status(422).json({
      errors: {
        lastName: 'is required',
      },
    });
  }

  const finalUser = new Users(userBody);
  return finalUser.save()
    .then(() => res.json({ user: finalUser.toJSON() }))
    .catch(next);
});

router.get('/', (req, res, next) => {
  return Users.find()
    .sort({ lastName: 'descending', firstName: 'decending' })
    .then((users) => res.json({ users: users.map(user => user.toJSON()) }))
    .catch(next);
});

router.param('id', (req, res, next, id) => {
  return Users.findById(id, (err, user) => {
    if(err) {
      return res.sendStatus(404);
    } else if(user) {
      req.user = user;
      return next();
    }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  return res.json({
    user: req.user.toJSON(),
  });
});

router.patch('/:id', (req, res, next) => {
  const { userBody } = req;

  if(typeof userBody.email !== 'undefined') {
    req.user.email = userBody.email;
  }

  if(typeof userBody.firstName !== 'undefined') {
    req.user.firstName = userBody.firstName;
  }

  if(typeof userBody.lastName !== 'undefined') {
    req.user.lastName = userBody.lastName;
  }

  return req.user.save()
    .then(() => res.json({ user: req.user.toJSON() }))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  return Users.findByIdAndRemove(req.user._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;