import React, { Component } from 'react'
import {connect} from 'react-redux';

class DanhSachCuoc extends Component {
    render() {
        return (
            <div className="container mt-1">
                <div className="row">
                {
                    this.props.danhSachCuoc.map((item, index) => {
                        return (
                            <div className="col-md-4 text-center" key={index}>
                                <button onClick={()=>this.props.datCuoc(item.ma)}>
                                    <img src={item.hinhAnh}></img>
                                    <div className="text-danger display-4">{item.diemCuoc}</div>
                                </button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    
    return {
        danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (ma) => {
            dispatch({
                type: 'DAT_CUOC',
                ma
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);