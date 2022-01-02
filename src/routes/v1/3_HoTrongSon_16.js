const express = require('express');
const hoTrongSon = require('../../controllers/3_HoTrongSon_16');

const router = express.Router();

router.route('/').get(hoTrongSon.cau1);
router.route('/cau2').get(hoTrongSon.getCau2).post(hoTrongSon.cau2);
router.route('/cau3/:id').get(hoTrongSon.getCau3).post(hoTrongSon.cau3);
router.route('/cau4/:id').get(hoTrongSon.getCau4).post(hoTrongSon.cau4);
router.route('/cau5').get(hoTrongSon.getCau5).post(hoTrongSon.cau5);
module.exports = router;
