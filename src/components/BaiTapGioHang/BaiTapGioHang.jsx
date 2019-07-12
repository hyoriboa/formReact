import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

export default class BaiTapGioHang extends Component {


    
    render() {
        return (
            <div className="container">
                <h3>Danh sach san pham</h3>
                <DanhSachSanPham />
                <GioHang />
            </div>
        )
    }
}

