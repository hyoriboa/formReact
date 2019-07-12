import React, { Component } from 'react'
import DanhSachKhoaHoc from './DanhSachKhoaHoc';
import FormThemKhoaHoc from './FormThemKhoaHoc';

export default class BaiTapQuanLiKhoaHoc extends Component {
    render() {
        return (
            <div>
                <FormThemKhoaHoc />
                <DanhSachKhoaHoc />
            </div>
        )
    }
}
