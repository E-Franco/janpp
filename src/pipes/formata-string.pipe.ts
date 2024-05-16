import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "FormataString" })
export class FormataStringPipe implements PipeTransform {

    private DECIMAL_SEPARATOR: string;
    private GROUP_SEPARATOR=",";
    private maskedId: any;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = ",";
  }

    transform(valString : any, mask : string | undefined) {
        if (!valString) {
            return '';
        }
        let val = valString.toString();

        if(mask != undefined && mask != ""){
            switch(mask){
                case "telefone":
                    this.maskedId = this.telefone(val);
                    return this.maskedId;
                case 'celular':
                    this.maskedId = this.celular(val);
                    return this.maskedId;
                case 'dataCartao':
                    this.maskedId = this.dataExpiracaoCartao(val);
                    return this.maskedId;
                case "dataNascimento":
                    this.maskedId = this.dataNascimento(val);
                    return this.maskedId;
            }
        }
        else{
            const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
            if(parts[0].length <= 8 && val.indexOf('x') == -1){
                this.maskedId = this.cep(parts[0]);
                return this.maskedId;
            }else if(parts[0].length <= 9 && val.indexOf('x') > -1 ){
                // this.maskedId = this.rg(parts[0]);
                this.maskedId = this.rg(val);
                return this.maskedId;
            }else if(parts[0].length <= 11){
                this.maskedId = this.cpf_mask(parts[0]);
                return this.maskedId;
            }else{
                this.maskedId = this.cnpj(parts[0]);
                return this.maskedId;
            }
        }
    } 

    unFormat(val : any) {
        if (!val) {
            return '';
        }
        val = val.replace(/\D/g, '');

        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        } else {
            return val.replace(/\./g, '');
        }
    };

    cpf_mask(v : string) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
    }

    cnpj(v : string) {
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca um hífen depois do bloco de quatro dígitos
        return v;
    }

    cep(v : string) {
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2-$3'); //Coloca ponto entre o quinto e o sexto dígitos
        return v;
    }

    rg(v : string) {
        const aux = this.unFormat(v).split(this.DECIMAL_SEPARATOR);
        if(v.indexOf('x') > -1){
            v= aux[0]+'x'
        }else{
            v = aux[0];
        }
        return v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dx])$/,'$1.$2.$3-$4');
    }

    telefone(v : string){
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        return v.replace(/^(\d{1,2})(\d{4})/,'($1)$2-');
    }

    celular(v : string){
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        return v.replace(/^(\d{1,2})(\d{5})/,'($1)$2-');
    }

    dataExpiracaoCartao(v : string){
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1/$2');
        return v
    }

    dataNascimento(v : string){
        v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1/$2');
        v = v.replace(/(\d{2})(\d)/, '$1/$2');
        return v
    }
}