import { ModeloBase } from "./modelobase";

export class Usuario extends ModeloBase{
    public Nome : string | undefined;
    public Email : string | undefined;
    public CGC : string | undefined;
    public Senha : string | undefined;
    public ConfirmarSenha : string | undefined;
    public PrimeiroAcesso : boolean = false;
    public Sexo : TipoSexo = TipoSexo.Masculino;
}

export enum TipoSexo
{
    NaoDefinido = 0,
    Masculino = 1,
    Feminino = 2
}