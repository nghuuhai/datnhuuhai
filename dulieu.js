const image_bom = document.getElementById('img-pump');
const image_light = document.getElementById('img-light');


// đọc độ ẩm trên firebase
var doam = firebase.database().ref().child('doam');
doam.on('value', snap => {
    document.getElementById('doam').innerHTML = snap.val();
})



var doamdat = firebase.database().ref().child('doamdat');
doamdat.on('value', snap => {
    document.getElementById('doamdat').innerHTML = snap.val();
})



var nhietdo = firebase.database().ref().child('nhietdo');
nhietdo.on('value', snap => {
    document.getElementById('nhietdo').innerHTML = snap.val();
})



var cuongdosang = firebase.database().ref().child('cuongdosang');
cuongdosang.on('value', snap => {
    document.getElementById('cuongdosang').innerHTML = snap.val();
})


var sangtat = firebase.database().ref('Den');
sangtat.on('value', function(snapshot) {
    if (snapshot.val() == 1) {
        image_light.src = 'images/light_on_96px.png';
    } else {
        image_light.src = 'images/light_off_96px.png';
    }
});


var bomuoc = firebase.database().ref('Bom');
bomuoc.on('value', function(snapshot) {
    if (snapshot.val() == 1) {
        image_bom.src = 'images/pump_on_96px.png';
    }
    if (snapshot.val() == 0) {
        image_bom.src = 'images/pump_off_96px.png';
    }
});


//ĐIỀU KHIỂN ĐÈN
var dbRefLed = firebase.database().ref().child('Den');
dbRefLed.on('value', snap => {
    if (snap.val() == 1) {
        stateLed = true;
        // valueLed = 1;
        console.log("Led: " + snap.val());
    } else if (snap.val() == 0) {
        stateLed = false;
        // valueLed=0;
        console.log("Led: " + snap.val());
    }
})


// ĐIỀU KHIỂN BƠM
var dbRefFan = firebase.database().ref().child('Bom');
dbRefFan.on('value', snap => {
    if (snap.val() == 1) {
        stateBom = true;
        // valueBom = 1;
        console.log("Fan: " + snap.val());
    } else if (snap.val() == 0) {
        stateBom = false;
        // valueBom= 0;
        console.log("Fan: " + snap.val());
    }
})








// tạo nút nhấn chuyển đổi
var stateBom = false;
var stateLed = false;
var valueBom = false;
var valueLed = false;



function lightToggle(event) {
    valueLed = !valueLed;
    if (valueLed) {
        event.target.value = 'Tắt';
        event.target.classList.remove('btn-success');
        event.target.classList.add('btn-danger');
    } else {
        event.target.value = 'Bật';
        event.target.classList.add('btn-success');
        event.target.classList.remove('btn-danger');
    }
    firebase.database().ref().update({ 'dkDen': valueLed });
}


function pumpToggle(event) {
    valueBom = !valueBom;
    if (valueBom) {
        event.target.value = 'Tắt';
        event.target.classList.remove('btn-success');
        event.target.classList.add('btn-danger');
    } else {
        event.target.value = 'Bật';
        event.target.classList.add('btn-success');
        event.target.classList.remove('btn-danger');
    }
    firebase.database().ref().update({ 'dkBom': valueBom });
}


setInterval(function() {
    var date = new Date();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();
    document.getElementById('dongho').innerHTML = gio + ':' + phut + ':' + giay;
}, 1000);