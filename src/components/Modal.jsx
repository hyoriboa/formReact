import React, { Component } from 'react';

import {connect} from 'react-redux'; //thư viện kết nối store của redux và component của react

class Modal extends Component {
    render() {
        return (
        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
                <h4 className="modal-title"> {this.props.sanPhamModal.tenSP}</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
                {this.props.sanPhamModal.tenSP}
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        )
    }
}


//khi ứng chạy thì mapStateToProps sẽ dc thực thi
const mapStateToProps =(state) =>{//hàm này tương tự subscribe bên angular
    //state: store tổng (rootReducer)
    return{
        sanPhamModal: state.quanLySanPhamStoreReducer.sanPhamModal
            //=>tạo ra 1 props cho component lấy kết quả từ store về
            //quanLySanPhamStoreReducer, sanPhamModal từ QuanLySanPhamStoreReducer.jsx
    }
}

export default connect(mapStateToProps, null)(Modal); //kết nối component với redux
