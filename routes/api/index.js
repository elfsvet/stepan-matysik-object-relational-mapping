// creating express router
const router = require('express').Router();
// to properly set up the post and user routes

// import the modules
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// instructing the router instance to use :
// correct url paths
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
