// BAI TAP 2 //
document.getElementById('btnSapXep').onclick = function () {
    //input
    var a = Number(document.getElementById('soThuNhat').value);
    var b = Number(document.getElementById('soThuHai').value);
    var c = Number(document.getElementById('soThuBa').value);

    //output
    var ketQua = '';

    //progress
    if (a > b && b > c) {
        ketQua = c + ' < ' + b + ' < ' + a;
    }else if (a > b && c > a) {
        ketQua = b + ' < ' + a + ' < ' + c;
    }else if (a > b && c > b) {
        ketQua = b + ' < ' + c + ' < ' + a;
    }else if (b > a && a > c) {
        ketQua = c + ' < ' + a + ' < ' + b;
    }else if (b > c && c > a) {
        ketQua = a + ' < ' + c + ' < ' + b;
    }else {
        ketQua = a + ' < ' + b + ' < ' + c;
    }

    document.getElementById('ketQuaB1').innerHTML = ketQua;
}

// BAI TAP 2 //
document.getElementById('btnChaoHoi').onclick = function () {
    //input
    var thanhVien = document.getElementById('thanhVien').value;

    //output
    var ketQua = '';

    //progress
    if (thanhVien == 'Bố') {
        ketQua = 'Bố';
    }else if (thanhVien == 'Mẹ') {
        ketQua = 'Mẹ';
    }else if (thanhVien == 'Anh Trai') {
        ketQua = 'Anh Trai';
    }else if (thanhVien == 'Em Gái') {
        ketQua = 'Em Gái';
    }else {
        ketQua = 'người lạ!'
    }

    document.getElementById('ketQuaB2').innerHTML = 'Xin Chào ' + ketQua; 
}

//BAI TAP 3 //
document.getElementById('btnDemSoLuong').onclick = function () {
    //input
    var s1 = Number(document.getElementById('s1').value);
    var s2 = Number(document.getElementById('s2').value);
    var s3 = Number(document.getElementById('s3').value);

    //output
    var soSoChan = 0;
    var soSoLe = 0;

    //progress
    if (s1 % 2 == 0) {
        soSoChan = soSoChan += 1;
        soSoLe = 3 - soSoChan;
    };
    if (s2 % 2 ==0) {
        soSoChan = soSoChan += 1;
        soSoLe = 3 - soSoChan;
    };
    if (s3 % 2 == 0) {
        soSoChan = soSoChan += 1;
        soSoLe = 3 - soSoChan;
    };
    if ((s1 % 2 != 0) && (s2 % 2 != 0) && (s3 % 2 != 0)) {
        soSoChan = 0;
        soSoLe = 3;
    };

    document.getElementById('ketQuaB3').innerHTML = 'Có ' + soSoChan + ' số chẵn và có ' + soSoLe + ' số lẻ';
}

// BAI TAP 4 //
document.getElementById('btnDuDoan').onclick = function () {
    //input
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);

    //output
    var ketQua = '';

    //progress
    if (canh1 == canh2 && canh2 == canh3) {
        ketQua = 'tam giác đều';
    }else if ((canh1==canh2) || (canh1==canh3) || (canh2==canh3)) {
        ketQua = 'tam giác cân';
    }else if ((canh1 * canh1 == canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 == canh2 * canh2 + canh1 * canh1)) {
        ketQua = 'tam giác vuông';
    }else {
        ketQua = 'một loại tam giác nào đó';
    };

    document.getElementById('ketQuaB4').innerHTML = 'Đó chính là ' + ketQua;
}