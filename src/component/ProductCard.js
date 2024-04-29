import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({item}) => {
  //item이 존재하고 그 속성 중에new가 있는 경우에만 isnew 변수를 true로 설정
  //!!연산자는 값을 불리언값으로 강제 변환시키는데 사용
  //!!연산자는 값이 존재하면 true로 값이 존재하지않으면 false 변환
  const isnew = !!item?.new;
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div className='product_info' onClick={showDetail}>
        <div className="img_box"><img src={item?.img} alt={item?.title} /></div>
        <div className="itme_new" style={{
          backgroundColor: isnew ? "#fd6562" : "transparent", 
          color: isnew ? "#fff" : "#585858"}}>
          {item?.new?"신상품":""}</div>
        <div className="item_title">{item?.title}</div>
        <div className="item_price">{item?.price}</div>
        <div className="item_discount">{item?.discount==true?"할인상품": ""}</div>
    </div>
  )
}
