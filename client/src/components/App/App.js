import React, { Fragment, Suspense } from 'react';

import { Switch,BrowserRouter as Router,Route } from "react-router-dom";
import {Login,TrangChu,NhanVien,QuanLy} from '../index'



export default function App() {
  	return (
    	<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={TrangChu}></Route>
					<Route path="/Login" component={Login}></Route>
					<Route path="/NhanVien" component={NhanVien}></Route>
					<Route path="/QuanLy" component={QuanLy}></Route>
				
					
				</Switch>
			</Fragment>
		</Router>
  	);
}

