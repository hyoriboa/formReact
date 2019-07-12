import * as types from './../constants/DanhSachKhoaHoc';


const stateDefault = {
    DSKH: [],
}


const DanhSachKhoaHocReducer = (state= stateDefault, action) => {
    console.log(action);
    
    switch(action.type){
        case types.LAY_DANH_SACH_KHOA_HOC: {
            state.DSKH = action.DSKH; //action.DSKH => gửi lên từ action sau khi gọi ajax
            return {...state};
        }
        case types.THEM_KHOA_HOC: {
            let dsKhoaHoc = [...state.DSKH, action.khoaHoc];
            state.DSKH = dsKhoaHoc;
            return {...state};

        }
    }

    return {...state}
}

export default DanhSachKhoaHocReducer;


