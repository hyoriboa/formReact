import {combineReducers} from 'redux';

import quanLySanPhamStoreReducer from './reducer/QuanLySanPhamReducer';
import storeGioHangReducer from './reducer/GioHangReducer';
import GameBauCuaReducer from './reducer/BaiTapGameBauCuaReducer';
import DanhSachKhoaHocReducer from './reducer/QuanLiKhoaHocReducer';

// B2: dang ki reducer
const rootReducer = combineReducers({//rootReducer là store tổng của toàn ứng dụng
    //chứa các store con
    quanLySanPhamStoreReducer,
    storeGioHangReducer,
    GameBauCuaReducer,
    DanhSachKhoaHocReducer

});

export default rootReducer;

