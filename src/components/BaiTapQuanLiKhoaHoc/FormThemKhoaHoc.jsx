import React, { Component } from 'react'

import {connect} from 'react-redux'
import {themKhoaHocAction} from './../../redux/actions/DanhSachKhoaHoc';

class FormThemKhoaHoc extends Component {

    constructor(props){
        super(props);

        this.state = {
            MaKhoaHoc: '',
            TenKhoaHoc: '',
            HinhAnh: ''
        }
    }

    //ham lay du lieu input
    handleInput = (event) => {
        // console.log(event.target);
        //tham so event là đối tượng của chính bản thân hàm này

        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
        
    }

    handleSubmit = (event) => {
        event.preventDefault(); // cản reload lại trang //
        this.props.themKhoaHoc(this.state);
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit} >
                <h3>Them khoa hoc</h3>
                <div className="form-group">
                    <span>Ma khoa hoc</span>
                    <input name="MaKhoaHoc" className="form-group" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <span>Ten khoa hoc</span>
                    <input name="TenKhoaHoc" className="form-group" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <span>Hinh anh</span>
                    <input name="HinhAnh" className="form-group" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Them khoa hoc</button>
                </div>
            </form>
                
                    
        )
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        themKhoaHoc: (khoaHoc) => {
            dispatch(themKhoaHocAction(khoaHoc))
        }
    }
}


export default connect(null, mapDispatchToProps)(FormThemKhoaHoc);