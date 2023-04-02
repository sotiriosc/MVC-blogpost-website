// This index file organizes all the routes and creates a module available to other files through module exports.

const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;