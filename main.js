// bài 1


document.getElementById("btnsapxep").onclick = function () {
    // -đầu vào
    var number1 = document.getElementById("number_1").value * 1;
    var number2 = document.getElementById("number_2").value * 1;
    var number3 = document.getElementById("number_3").value * 1;
    var sapxep;


// number1 = parseInt(number1);
// number2 = parseInt(number2);
// number3 = parseInt(number3);
    //xử lý
// console.log(number1, number2, number3);
    if (number1 > number2 && number2 > number3){
        sapxep = number1 + ',' + number2 + ',' + number3;
    } else if(number1 > number2 && number2 < number3){
        sapxep = number1 + ',' + number3 + ',' + number2;
    } else if(number2 > number1 && number1 > number3){
        sapxep = number2 + ',' + number1 + ',' + number3;
    } else if(number2 > number1 && number1 < number3){
        sapxep = number2 + ',' + number3 + ',' + number1;
    } else if(number3 > number1 && number1 > number2){
        sapxep = number3 + ',' + number1 + ',' + number2;
    } else if(number3 > number1 && number1 < number2){
        sapxep = number3 + ',' + number2 + ',' + number1;
    }
    else{
        sapxep = 'ngu';
    }
    // đầu ra
var result = "";
result += "<p>thu tu la:" + sapxep + "</p";
document.getElementById("infosapxep").innerHTML = result;

};

// bài 2



document.getElementById("btnHello").onclick = function () { 
// -đầu vào
var thanhVien = document.getElementById("thanhVien").value;
var loichao;
// xử lý
if (thanhVien == "B") {
    // console.log("Xin chào Bố ")
    loichao = "Xin chào Bố ";
} else if (thanhVien == "M") {
    // console.log("Xin chào Mẹ")
    loichao = "Xin chào Mẹ ";

} else if (thanhVien == "A") {
    // console.log("Xin chào anh trai")
    loichao = "Xin chào Anh Trai";
} else if (thanhVien == "E") {
    // console.log("Xin chao em gái")
    loichao = "Xin chào Em gái ";

} else {
    thanhVien = "Chọn thành viên"
    // console.log("hãy chọn thành viên")
    loichao = "hãy chọn thành viên";  
}
    // đầu ra
var result1 = "";
result1 +=  loichao;
document.getElementById("infoHello").innerHTML = loichao;


};

// bài 3
//đầu ra
document.getElementById("btnSapXep").onclick = function (){
    var num4 = document.getElementById("number_4").value*1;
    var num5 = document.getElementById("number_5").value*1;
    var num6 = document.getElementById("number_6").value*1;
    var chanLe;
    // Xử lý
    // num4 = parseInt(num4);
    // num5 = parseInt(num5);
    // num6 = parseInt(num6);
    if(num4 % 2 == 0 && num5 % 2 == 0 && num6 % 2 == 0){
        chanLe = "Có 3 số chẵn";
    }else if(num4 % 2 == 0 && num5 % 2 == 0 && num6 % 2 == 0){
        chanLe = "Có 2 số chẵn và 1 số lẻ";
    }else if(num4 % 2 == 0 && num5 % 2 != 0 && num6 % 2 == 0){
        chanLe = "Có 2 số chẵn và 1 số lẻ";
    }else if(num4 % 2 == 0 && num5 % 2 == 0 && num6 % 2 != 0){
        chanLe = "Có 2 số chẵn và 1 số lẻ";
    }else if(num4 % 2 == 0 && num5 % 2 != 0 && num6 % 2 != 0){
        chanLe = "Có 1 số chẵn và 2 số lẻ";
    }else if(num4 % 2 == 0 && num5 % 2 != 0 && num6 % 2 != 0){
        chanLe = "Có 1 số chẵn và 2 số lẻ";
    }else if(num4 % 2 != 0 && num5 % 2 == 0 && num6 % 2 != 0){
        chanLe = "Có 1 số chẵn và 2 số lẻ";
    }else if(num4 % 2 != 0 && num5 % 2 != 0 && num6 % 2 == 0){
        chanLe = "Có 1 số chẵn và 2 số lẻ";
    }else {
        chanLe = "có 3 số lẻ";
    };

    // Đầu ra
    var result2 = "";
result2 +=  chanLe;
document.getElementById("infocl").innerHTML = result2;
}; 

// bài 4

document.getElementById("btnTg").onclick = function (){
    var num7 = document.getElementById("number_7").value*1;
    var num8 = document.getElementById("number_8").value*1;
    var num9 = document.getElementById("number_9").value*1;
    var tamGiac;
    // Xử lý
    // num4 = parseInt(num4);
    // num5 = parseInt(num5);
    // num6 = parseInt(num6);
    if( num7 == num8 && num7 != num9){
        tamGiac = "Tam giác cân";
    }else if(num7 != num8 && num8 == num9){
        tamGiac = "Tam giác cân";
    }else if(num7 == num9 && num8 != num9){
        tamGiac = "Tam giác cân";
    }else if(num7 == num8 && num7 == num9){
        tamGiac = "Tam giác đều";
    }else if(num7*num7 == num8*num8 +num9*num9 ) {
        tamGiac = "Tam giác vuông";
    }else if(num8*num8 == num7 * num7 +num9*num9 ) {
        tamGiac = "Tam giác vuông";

    }else if( num9 * num9 == num7 * num7 +num8*num8 ) {
        tamGiac = "Tam giác vuông";

    }else{
        tamGiac = "Tam giác thường";

    }

    // Đầu ra
    var result3 = "";
result3 +=  tamGiac;
document.getElementById("infoTg").innerHTML = result3;
}; 