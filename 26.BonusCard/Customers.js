class Customer extends BonusBase{
    constructor(ad,soyad,kartVarmi,mehsullar){
        super(ad, soyad, kartVarmi, mehsullar)
    }

    hesabla(){
      return  super.hesabla();
    }
    
}