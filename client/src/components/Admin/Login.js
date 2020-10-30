import React, { useState } from 'react';
import { axios } from '../../config/constant';




export default function Login() {
    const [taikhoan, setTaiKhoan] = useState({
        name:'',
        password: ''

    });
    async function KiemTraAccount(){
        let res  = await axios.post('/dangnhap',{
            name:taikhoan.name,
            password:taikhoan.password
        })
        if(res.data.status === 'thanhcong'){
            if(res.data.data.VaiTro === 1){
                window.location.pathname = "/quanly";
            }
            else{
                window.location.pathname = "/nhanvien";
            }
        }
        else{
            alert('Dang nhap that bai');
        }
    }

  	return (
    	<div>
			<form className="form-horizol form-control" style={{width: '400px', height: '200px', margin: 'auto', marginTop: '200px'}}>
                <div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">User:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="User" onChange = {(e)=> {setTaiKhoan({...taikhoan,name:e.target.value})}}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Password:</label>
                        <div className="col-sm-9">          
                            <input type="password" className="form-control" placeholder="Enter password" name="pwd" onChange = {(e)=> {setTaiKhoan({...taikhoan,password:e.target.value})}} />
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
                            <a href="formQLLich.html" type="submit" className="btn btn-default" onClick={(e)=>{e.preventDefault();KiemTraAccount()}}  >Submit</a>
                        </div>
                    </div>
                </div>
            </form>
    	</div>
  	);
}

