import * as CryptoJS from "crypto-js";

export class UtilService{
    static ConverterDouble(dado : any){
        var retorno = dado == undefined ? 0 : dado;
        if(retorno == "")
            retorno = 0;
        if(typeof retorno == 'string')
            retorno = parseFloat(retorno);
        return retorno;
    }

    static EncryptografarAES(texto : string) : string{
        var key = CryptoJS.enc.Utf8.parse('JDS438FDSSJHLWEQ'); 
        var iv = CryptoJS.enc.Utf8.parse('679FDM329IFD23HJ'); 
        var retorno = CryptoJS.AES.encrypt(texto, key, {
                keySize: 128,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return retorno.toString();
    }

    static DecryptografarAES(texto : string) : string{
        var key = CryptoJS.enc.Utf8.parse('JDS438FDSSJHLWEQ'); 
        var iv = CryptoJS.enc.Utf8.parse('679FDM329IFD23HJ'); 
        var retorno = CryptoJS.AES.decrypt(texto, key, {
                keySize: 128,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return retorno.toString(CryptoJS.enc.Utf8);
    }

    static getParameterUrlByName(name : string, url = window.location.href) : string | null {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[;?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}