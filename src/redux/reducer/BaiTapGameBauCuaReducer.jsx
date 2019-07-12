


const stateDefault = {
    tongDiem: 100,
    danhSachCuoc: [
        {ma: "bau", hinhAnh: "img/bau.PNG", diemCuoc: 0},
        {ma: "cua", hinhAnh: "img/cua.PNG", diemCuoc: 0},
        {ma: "tom", hinhAnh: "img/tom.PNG", diemCuoc: 0},
        {ma: "ga", hinhAnh: "img/ga.PNG", diemCuoc: 0},
        {ma: "ca", hinhAnh: "img/ca.PNG", diemCuoc: 0},
        {ma: "nai", hinhAnh: "img/nai.PNG", diemCuoc: 0},
    ],
    xucXac: [
        {ma: "bau", hinhAnh: "img/bau.PNG"},
        {ma: "bau", hinhAnh: "img/bau.PNG"},
        {ma: "bau", hinhAnh: "img/bau.PNG"},
    ]
}

const GameBauCuaReducer = (state = stateDefault, action) => {

    switch(action.type){
        case 'DAT_CUOC': {
            //xu li dat cuoc
            let danhSachCuocCapNhat = [...state.danhSachCuoc];
            let index = danhSachCuocCapNhat.findIndex((item => item.ma === action.ma));
            if(index !== -1){//neu action.ma co chua trong danhSachCuoc
                if(state.tongDiem > 0){
                     // + diem item cuoc do
                    danhSachCuocCapNhat[index].diemCuoc += 10;
                    state.tongDiem -= 10;
                }
                
            }
            state.danhSachCuoc = danhSachCuocCapNhat;
            return {...state};
        }
        case 'CHOI_GAME':{
            //xu li random
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 3; i++){
                //random so ngau nhien tu 0 -> danhSachCuoc.length
               let soNgauNhien = Math.floor(Math.random() * state.danhSachCuoc.length);
               //tao ra 1 con xuc xac moi tu state.danhSachCuoc
               let xucXacMoi = {
                   ma: state.danhSachCuoc[soNgauNhien].ma,
                   hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
               }
               //them vao mang xuc xac moi
               mangXucXacNgauNhien.push(xucXacMoi);
            }
            state.xucXac = mangXucXacNgauNhien;

            //xu li hoan tien
            let danhSachCuocCapNhat = [...state.danhSachCuoc];
            state.danhSachCuoc.forEach((item, idsCuoc)=>{//duyet mang cuoc
                //tim tung phan tu mang cuoc co trong mang xuc xac ko =>neu co xu li hoan tien
                let iXucXac = mangXucXacNgauNhien.findIndex((xucXac => xucXac.ma === item.ma));
                //hoan tien
                if(iXucXac !== -1){
                    state.tongDiem += danhSachCuocCapNhat[idsCuoc].diemCuoc;
                }
            });

            //xu li cong diem
            //duyet tung con xuc xac so sanh vs danhSachCuoc
            mangXucXacNgauNhien.forEach((xucXac, iXucXac) => {
                //tim xuc xac co trong mang cuoc ko
                let iCuoc = danhSachCuocCapNhat.findIndex(itemCuoc => itemCuoc.ma === xucXac.ma);
                if(iCuoc !== -1){
                    state.tongDiem += danhSachCuocCapNhat[iCuoc].diemCuoc;
                }
            });

            //reset diem cuoc
            danhSachCuocCapNhat.forEach((item, index) => {
                item.diemCuoc = 0;
            });
            state.danhSachCuoc = danhSachCuocCapNhat;

            return {...state};
        }
    }

    return {...state}
}

export default GameBauCuaReducer;

