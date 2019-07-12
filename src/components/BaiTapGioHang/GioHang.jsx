import React, { Component } from 'react'

import {connect} from 'react-redux';


class GioHang extends Component {


    render() {
        return (
            <div className="container">
            <h3 className="text-left">Giỏ hàng</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.gioHang.map((sanPham, index) => {
                            return <tr key={index}>
                                <td><img width={100} heigh={150} src={sanPham.hinhAnh} alt=""/></td>
                                <td>{sanPham.tenSP}</td>
                                <td>{(sanPham.gia).toLocaleString()}</td>
                                <td>
                                    <button onClick={()=>this.props.tangGiamSoLuong(sanPham.maSP, false)} className="btn btn-danger">-</button>
                                    {sanPham.soLuong}
                                    <button onClick={()=>this.props.tangGiamSoLuong(sanPham.maSP, true)} className="btn btn-primary">+</button>
                                </td>
                                <td>{(sanPham.gia * sanPham.soLuong).toLocaleString()}</td>
                                <td>
                                    <button 
                                    onClick={()=>this.props.xoaGioHang(sanPham.maSP)}
                                    className="btn btn-danger">X</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
        )
    }
}

const mapStateToProps = (state) => {//state la store tong
    // console.log(state.storeGioHangReducer.gioHang);
    
    //tao ra 1 props gioHang lay tu storeGioHangReducer ve
    return {
        gioHang: state.storeGioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {//định nghĩa phương thức xóa giá hảng => truyền lên reducer maSP
            dispatch({
                type: 'XOA_GIO_HANG',
                maSP
            })
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            dispatch({
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            })
        },
    }
}

// export default connect(mapStateToProps, null)(GioHang);//ket noi giua component GioHang va reducerGioHang
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);//ket noi giua component GioHang va reducerGioHang