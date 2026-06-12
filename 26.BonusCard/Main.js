let message = 
`
Marketə xoş gəldiniz!
Bonus kartınız varmı ?
1- Bəli
2- Xeyr

 `


 const mehsullar = [
    {
        mehsulAdi: "Süt",
        qiymet: 2.50
    },
    {
        mehsulAdi: "Yağ",
        qiymet: 5
    },
    {
        mehsulAdi: "Fanta",
        qiymet: 2
    }
 ]

 let result = confirm(message);

 if(result){
    let ad = prompt("Adınızı yazın");
    let soyad = prompt("Soyadınızı yazın")

    const musteri = new Customer(ad, soyad,result,mehsullar);
    odenilecekTutar = musteri.hesabla();

    alert(`Müştəri məlumatları: ${ad} ${soyad} 
    Ödəniləcək məbləğ: ${odenilecekTutar}
        `)
 }
 else{
    const musteri = new Customer(null, null, result, mehsullar);
    odenilecekTutar = musteri.hesabla()

    alert(`Ödəniləcək Məbləğ: ${odenilecekTutar}`)
 }