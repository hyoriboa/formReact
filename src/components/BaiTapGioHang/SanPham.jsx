import React, { Component } from 'react'

import {connect} from 'react-redux'

class SanPham extends Component {

    render() {

        let {sanPham} = this.props;

        return (
            <div className="card">
                <img className="card-img-top" width={100} height={200} src={sanPham.img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title"> {sanPham.name} </h4>
                    <p className="card-text">{(sanPham.price).toLocaleString()}  VND</p>
                    <p className="card-text">  </p>

                    {/* gan su kien onClick dua du lieu len store */}
                    <button onClick={()=>this.props.muaHang(sanPham)} className="btn btn-danger" >Mua hàng</button>
                </div>
            </div>

        )
    }
}

//lấy sự kiện
const mapDispatchToProps = (dispatch) => {
    //tao ra su kien gui du lieu tu reducer
    return {
        muaHang: (sanPham) => {
            dispatch({
                type: 'MUA_HANG',
                // sanPham: sanPham
                sanPham
            })// gui du lieu la 1 action len store {type: '', sanPham}
        },
        //su kien gui len store
    }
}

export default connect(null, mapDispatchToProps)(SanPham);
// null: ko co du lieu lay ve
//mapDispatchToProps: gui len storeGioHangReducer