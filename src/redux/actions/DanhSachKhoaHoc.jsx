import axios from 'axios';
import * as types from './../constants/DanhSachKhoaHoc';

//action là 1 đối tượng
// {
// type: ten_action
// data: dữ liệu gữi lên store
// }


export const layDanhSachKhoaHocAction = () => {
    // return {
    //     type: types.LAY_DANH_SACH_KHOA_HOC,
    //     DSKH: [{MaKhoaHoc: 1, TenKhoaHoc: 'cybersoft', HinhAnh: '...'}]
    // }

    //DISPATCH BẢN CHẤT LÀ 1 OBJ
    //dispatch này trả về 1 func nên lỗi middleware => dùng applyMiddleware trong index.js và cài redux-thunk
    return dispatch => {
        axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method: 'GET'
        }).then(result => {
            // console.log(result.data);
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                DSKH: result.data
            })

        }).catch(err => {
            console.log(err.respone.data);
        })
    }

}

export const themKhoaHocAction = (khoaHoc) => {
    return {
        type: types.THEM_KHOA_HOC,
        khoaHoc
    }
}