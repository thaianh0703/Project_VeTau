import React from 'react';

export default function Test1() {
      var product = {
            id :1 ,
            name:'iphone',
            price:'15tr',
      };
      var name= 'thai'; // gán biến vào giao diện
    return (
            <div>
                  <h1>{name}</h1>
                  id:	{product.id}<br/>
                  name: {product.name}<br/>
                  price:{product.price}<br/>
            </div>
    );
}



