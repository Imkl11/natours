const express = require('express');
// const {creatTour, deleteTour, getAllTours, updateTour, checkBody, checkId} = require('../controller/tourController');
const {creatTour, deleteTour, getAllTours, updateTour, getTour} = require('../controller/tourController');


const router = express.Router();
// router.param('id', checkId);

// router.route('/').get(getAllTours).post(checkBody, creatTour);
router.route('/').get(getAllTours).post(creatTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;