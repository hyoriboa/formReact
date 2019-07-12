import React, { Component } from 'react';

import axios from 'axios';
import {connect} from 'react-redux';
import {layDanhSachKhoaHocAction} from './../../redux/actions/DanhSachKhoaHoc';

class DanhSachKhoaHoc extends Component {

    constructor(props){
        super(props);
        
        // this.state = {
        //     DSKH: []
        // }
    }

    //goi ajax
    componentDidMount(){

        // axios({
        //     url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
        //     method: 'GET'
        // }).then(result => {
        //     // console.log(result.data);
        //     this.setState({
        //         DSKH: result.data
        //     })

        // }).catch(err => {
        //     console.log(err.respone.data);
        // })


        this.props.layDanhSachKhoaHoc();
    }

    render() {
        return (
           <div>
                <h3>Danh sach khoa hoc</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma khoa hoc</th>
                            <th>Ten khoa hoc</th>
                            <th>Hinh anh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.DSKH.map((khoaHoc, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{khoaHoc.MaKhoaHoc}</td>
                                        <td>{khoaHoc.TenKhoaHoc}</td>
                                        <td><img src={khoaHoc.HinhAnh} width={50} height={50} alt=""/></td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DSKH: state.DanhSachKhoaHocReducer.DSKH
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: ()=>{
            dispatch(
                layDanhSachKhoaHocAction()
            )
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);