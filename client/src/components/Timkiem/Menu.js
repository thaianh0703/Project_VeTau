import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Test1 from './Test1';

export default function Menu() {
    return (
            <div>
				
            	<ul className="nav navbar-default">
            		<li className="active">
            			<a>Trang chủ</a>
            		</li>
            		<li>
            			
            		</li>
            		<li>
            			<a>Quản ly lịch trình</a>
            		</li>
            		<li>
            			<a href="#">Thống kê</a>
            		</li>
            		<li>
            			<a href="#">Thoát</a>
            		</li>
            	</ul>
            </div>
    );
}

