import React, { Component } from 'react';

import {connect} from 'react-redux';
import SanPham from './SanPham';


class DanhSachSanPham extends Component {

    // renderSanPham = () => {
    //     return this.props.dsSanPham.map((sanPham, index) => {
    //         return (
    //             <div className="col-md-4" key={index}>
    //                 <SanPham />
    //             </div>
    //         )
    //     });
    // }

    render() {
        return (
            <div className="row">
                {/* {this.renderSanPham()} */}
                {
                    this.props.dsSanPham.map((sanPham, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <SanPham sanPham={sanPham}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

//B3: lấy dữ liệu từ store(reducer) về (lấy giá trị)
const mapStateToProps = (state) => {//state: là store tổng rootReducer
    // console.log(state.storeGioHangReducer.dsSanPham);
    
    //tao ra  props cho component => this.props.dsSanPham
    return {
        dsSanPham: state.storeGioHangReducer.dsSanPham
    }
}

export default connect(mapStateToProps, null)(DanhSachSanPham);//ket noi componet vs store cua redux