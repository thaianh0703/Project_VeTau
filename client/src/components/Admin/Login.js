import React, { useState } from 'react';
import { axios } from '../../config/constant';
//import {NhanVien,QuanLy} from '../index'




export default function Login() {
    const [taikhoan, setTaiKhoan] = useState({
        email: '',
        password: '',
    });
    async function KiemTraAccount() {
        let res = await axios.post('/dangnhap', {
            email: taikhoan.email,
            password: taikhoan.password
        })
        if (res.data.status === 'thanhcong') {
            // kiem tra và chuyển vể giao dien tuong ung
            if (res.data.data.vaiTro === 0) {
                window.location.pathname = '/QuanLy';
            } else {
                
                window.location.pathname = '/NhanVien';
               
            }
            //alert('thanh cong')
            //setCookie('userID', res.data.data.userID); // truyen du lieu nguoi dung cho cookie ,dat tên là 'userID'
        } else {           
            alert("Dang nhap that bai")
        }
    }

  	return (
    	<div>
			{/* <form className="form-horizol form-control" style={{width: '400px', height: '200px', margin: 'auto', marginTop: '200px'}}>
                <div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">User:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="User"  onChange={(e) => {
                                                        setTaiKhoan({
                                                            ...taiKhoan,//giu lai giu lieu truoc do 
                                                            tenTaiKhoan:e.target.value
                                                        })
                                                    }}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Password:</label>
                        <div className="col-sm-9">          
                            <input type="password" className="form-control" placeholder="Enter password" name="pwd" onChange={(e) => {
                                                        setTaiKhoan({
                                                            ...taiKhoan,
                                                            password: e.target.value
                                                        })
                                                    }} />
                        </div>
                    </div>
                    <div className="form-group">        
                        <div className="col-sm-offset-3 col-sm-9">
                            <div className="checkbox">
                                <label><input type="checkbox" name="remember" /> Remember me</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">        
                        <div className="col-sm-offset-3 col-sm-9">
                            <a type="submit" className="btn btn-default"  onClick={(e) => {
                                        e.preventDefault();
                                        KiemTraAccount()
                                    }}>Đăng nhập</a>
                        </div>

                    </div>
                </div>
            </form> */}
            <hr></hr>
            <div className="container">
                <h1 className="text-center"> ĐĂNG NHẬP</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4">

                        <form>
                            <div className="row">

                            </div> <input className="form-control" name="youremail" placeholder="Email" type="email" onChange={(e) => {
                                setTaiKhoan({
                                    ...taikhoan,//giu lai giu lieu truoc do 
                                    email: e.target.value
                                })
                            }} />
                            <input className="form-control" name="password" placeholder="Mật khẩu" type="password" onChange={(e) => {
                                setTaiKhoan({
                                    ...taikhoan,
                                    password: e.target.value
                                })
                            }} />

                            <br />
                            <br />
                            <button className="btn btn-lg btn-primary btn-block" onClick={(e) => {
                                e.preventDefault();
                                KiemTraAccount()
                            }}> Đăng Nhập</button>
                        </form>
                    </div>
                </div>
            </div>
    	</div>
  	);
}

