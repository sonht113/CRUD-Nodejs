const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {
  khoaService
} = require('../services');

const cau1 = catchAsync(async (req, res) => {
  const khoas = await khoaService.queryKhoas();
  res.render('cau1', {
    khoas
  });
});

const getCau2 = catchAsync(async (req, res) => {
  res.render('cau2');
});

const cau2 = catchAsync(async (req, res) => {
  const khoa = req.body;
  await khoaService.createKhoa(khoa);
  res.redirect('/v1/3_HoTrongSon_16');
});

const getCau3 = catchAsync(async (req, res) => {
  const id = req.params.id;
  const oneKhoa = await khoaService.getKhoaById(id);
  res.render('cau3', {
    khoa: oneKhoa,
  });
});

const cau3 = catchAsync(async (req, res) => {
  const id = req.params.id;
  await khoaService.updateKhoaById(id, req.body);
  res.redirect('/v1/3_HoTrongSon_16');
});

const getCau4 = catchAsync(async (req, res) => {
	const id = req.params.id;
	const oneKhoa = await khoaService.getKhoaById(id);
	res.render('cau4', {
		khoa: oneKhoa
	});
});
const cau4 = catchAsync(async (req, res) => {
	const id = req.params.id;
	await khoaService.deleteKhoaById(id);
  res.redirect('/v1/3_HoTrongSon_16');
});

const getCau5 = catchAsync(async (req, res) => {
	res.render('cau5');
});
const cau5 = catchAsync(async (req, res) => {
  const id = req.body.id;
  const khoa = await khoaService.getKhoaById(id);
  res.render('ketQuaCau5', {
    khoa
  });
});
module.exports = {
  cau1,
  cau2,
  getCau2,
  getCau3,
  cau3,
  getCau4,
  cau4,
  getCau5,
  cau5,
};
