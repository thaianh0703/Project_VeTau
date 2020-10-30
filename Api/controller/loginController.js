const {DBmongo,DBname} = require('../Config/containt');
const MongoClient = require('mongodb').MongoClient;
const asset = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports= {
    KiemTraDangNhap: async function (req, res) {
        const client = new MongoClient(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        var tenTaiKhoan = req.body.name;
        var matKhau = req.body.password;

        console.log(tenTaiKhoan);
        console.log(matKhau);

        await client.connect(async function (error, client) {//callback kiem soat bat dong bo
            assert.equal(null, error);
            console.log("Connected correctly to server");
            /**
             * TODO : NguoiDung là 1 collection(bảng) của mongodb
             */
            const col = client.db(dbName).collection("TaiKhoan");

            var resultUser = await col.find({ "Name": tenTaiKhoan }).next();

            if (resultUser === null) {
                res.status(200).json({
                    status: 'fail',
                    message: 'Tài khoản không tồn tại'
                });
            } else {

                bcrypt.compare(matKhau, resultUser.taikhoan.password, function (err, result) {

                    if (result === true) {
                        var secretKey = 'thai';

                        var payload = {
                            userID: resultUser._id,
                            vaiTro: resultUser.VaiTro
                        };

                        //7 ngày hết hạn token
                        var token = jwt.sign({ payload }, secretKey, { expiresIn: 60 * 1220 * 7 });
                        console.log(JSON.stringify(payload));
                        res.status(200).json({
                            status: 'thanhcong',
                            //message: 'Chức mửng đăng nhập thành công ^^',
                            data: payload
                        });
                    } else {
                        res.status(200).json({
                            status: "thatbai",
                            message: "Tài khoản hoặc mật khẩu không hợp lệ",
                        });
                    }
                })

            }
        });
    },
    KiemTraTokenAdmin: async function (req, res, next) {
        var token = req.header('token');
        let resultToken = await jwt.verify(token, 'thai');
        if (resultToken.payload.VaiTro === 1) {
            res.status(200).json({
                status: "thanhcong",
                message: 'Token hợp lệ',
            });
        } else {
            res.status(200).json({
                status: "fail",
                message: 'Token không hợp lệ !',
            });
        }
    },
    KiemTraTokenChuShop: function (req, res, next) {
        var token = req.header('token');
        jwt.verify(token, 'thai', function (err, payload) {
            if (payload.payload.vaiTro === 2) {
                res.status(200).json({
                    status: "thanhcong",
                    message: 'Token hợp lệ',
                });
                next();
            } else {
                res.status(200).json({
                    status: "fail",
                    message: 'Token không hợp lệ !',
                });
            }
        });
    },
   

}