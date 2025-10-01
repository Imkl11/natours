const express = require('express');
const {creatTour, deleteTour, getAllTours, updateTour, checkBody, checkId} = require('../controller/tourController');


const router = express.Router();
router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, creatTour);
router.route('/:id').patch(updateTour).delete(deleteTour);

module.exports = router;