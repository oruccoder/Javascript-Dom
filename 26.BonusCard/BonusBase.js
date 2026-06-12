class BonusBase{
    endirimHaqqi = 20;

    constructor(ad,soyad,kartVarmi,mehsullar){
        this.ad = ad;
        this.soyad = soyad;
        this.kartVarmi = kartVarmi;
        this.mehsullar = mehsullar;
    }

    hesabla(){
        let odenelicekTutar = 0;

        if(this.checkProduct(this.mehsullar)){
            // Səbət doludur

            if(this.kartVarmi){
                // bonus kartı varsa
                this.mehsullar.forEach((mehsul) => {
                    odenelicekTutar += (mehsul.qiymet*(100 - this.endirimHaqqi)/100)
                })
            }
        }
        else{
            // yoxdur
            this.mehsullar.forEach((mehsul) => {
                odenelicekTutar += mehsul.qiymet;
            })
        }

        return odenelicekTutar;
    }

    checkProduct(mehsullar){
        if(mehsullar!=null && mehsullar.length > 0){
            return true;
        }
        else{
            return false;
        }
    }

}

const test1 = new BonusBase();
test1.hesabla();