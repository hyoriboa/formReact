import React, { Component } from 'react'
import XucXac from './XucXac';
import DanhSachCuoc from './DanhSachCuoc';

export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className="container text-center">
                <h3>Bài tập bầu cua</h3>
                <XucXac />
                <DanhSachCuoc />
            </div>
        )
    }
}
