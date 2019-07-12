import React, { Component } from 'react'
import DanhSachSanPham from './components/DanhSachSanPham';
import Modal from './components/Modal';
import BaiTapGioHang from './components/BaiTapGioHang/BaiTapGioHang';
import BaiTapGameBauCua from './components/BaiTapGameBauCua/BaiTapGameBauCua';
import BaiTapQuanLiKhoaHoc from './components/BaiTapQuanLiKhoaHoc/BaiTapQuanLiKhoaHoc';

export default class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        {/* <h3>Danh sach san pham</h3>
        <DanhSachSanPham />
        <Modal /> */}

        {/* <BaiTapGioHang /> */}

        {/* <BaiTapGameBauCua /> */}
        <BaiTapQuanLiKhoaHoc />
      </div>
    )
  }
}
