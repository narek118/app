import mongoose from 'mongoose';

const User = mongoose.model('User');

export function getAllUsers(req, res) {
    const user = new User({
        name: req.query.name
    });

    user.save()
        .then(() => User.find())
        .then((users) => res.send(users))
        .catch((err) => res.status(500).send(err));
}