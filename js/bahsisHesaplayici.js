// Kullanılacak değerler
var hesapMiktari,bahsisMiktari,totalMiktar,bahsisYuzdesi,bahsisInp;

var yuzdeDiv,hesapDiv,bahsisDiv,totalDiv,hesapButon;

yuzdeDiv = document.getElementById('yuzdeDiv');
bahsisDiv = document.getElementById('bahsisDiv');
hesapDiv = document.getElementById('hesapDiv');
totalDiv = document.getElementById('totalDiv');
hesapButon = document.getElementById('hesapButon');

hesapMiktari = document.getElementById('faturaMik').value;

bahsisInp = document.getElementById('bahsisYuzde');
bahsisYuzdesi= 50; 
bahsisMiktari = (bahsisYuzdesi*hesapMiktari)/100;
bahsisInp.oninput = function(){
    bahsisYuzdesi = bahsisInp.value;
    bahsisMiktari = (hesapMiktari*bahsisYuzdesi)/100; 
    yuzdeDiv.innerHTML = "Bahsis Yuzdesi: " + bahsisYuzdesi + "%";
}

totalMiktar = hesapMiktari + bahsisMiktari; // Total miktar alındı

hesapButon.onclick = function(){
hesapMiktari = document.getElementById('faturaMik').value;
bahsisMiktari = (bahsisYuzdesi*hesapMiktari)/100;
if(hesapMiktari==""){
        hesapMiktari = 0;
}
hesapMiktari = Number(hesapMiktari);
hesapDiv.innerHTML = "Hesap Toplam: " + hesapMiktari;
bahsisDiv.innerHTML = "Bahsis Toplam:" + bahsisMiktari;
totalDiv.innerHTML = "Total: " + (hesapMiktari+bahsisMiktari);

}

window.onload = function(){
    bahsisInp.value = 50;
}




