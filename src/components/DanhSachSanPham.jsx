import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    dsSanPham = [
        {maSP: 1, tenSP: "SamSung galaxy s10", hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/161554/samsung-galaxy-s10-white-600x600.jpg"},
        {maSP: 2, tenSP: "Iphone X", hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png"},
        {maSP: 3, tenSP: "huawei p20", hinhAnh: "https://cdn1.vienthonga.vn/image/2018/4/1/huawei-p20-pro-twilight-800x800.jpg"},
      ]; 
    render() {
        return (
            <div className="row">
                {this.dsSanPham.map((sanPham, index)=>{
                    return (
                        <div className="col-md-3" key={index} >
                            <SanPham sanPham={sanPham} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
