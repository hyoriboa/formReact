import React, { Component } from 'react'

import {connect} from 'react-redux'

class SanPham extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" width={200} height={300} src={this.props.sanPham.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
                    <button onClick={() => this.props.xemChiTiet(this.props.sanPham)} 
                    className="btn btn-danger" data-toggle="modal" data-target="#myModal">Xem chi tiet</button>
                </div>
            </div>

        )
    }
}

//định nghĩa các sự kiện làm thay đổi giá trị trên store
const mapDispatchToProps = (dispatch) => {
    //tạo ra 1 phương thức xử lí sự kiện cho component
    return {
        xemChiTiet: (sanPham)=>{
            //dùng dispatch() đưa dữ liệu lên store
            dispatch({
                type: 'XEM_CHI_TIET', //type thuộc tính bắt buộc
                // sanPham: sanPham,
                sanPham2: sanPham
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPham);