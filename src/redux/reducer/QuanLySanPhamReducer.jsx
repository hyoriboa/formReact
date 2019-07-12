
const stateDefault = {
    //stateDefault: dữ liệu mặc định trên store
    sanPhamModal: {
        maSP: 1,
        tenSP: "san pham mac dinh"
    }

};


//quanLySanPhamStoreReducer: tương tự service bên angular
const quanLySanPhamStoreReducer = (state=stateDefault, action) =>{
    // console.log(action);

    switch(action.type)//dụa vào type để biết action nào từ component nào gửi dữ liệu lên
    {
        
        case 'XEM_CHI_TIET': {
            const stateUpdate = {...state}; //tạo ra state mới từ state cũ
            stateUpdate.sanPhamModal = action.sanPham2; //thay đổi giá trị trong state
            return {...stateUpdate};
        }
    }

    return {...state};
}


export default quanLySanPhamStoreReducer;