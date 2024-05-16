export class OutSaidaBaseWebApi{
    public CodErro : number = 0;
    public MsgErro : string = "";
    public Status : StatusRetorno = StatusRetorno.SUCESSO;
    public Retorno : string | undefined;
    public Entidade : any;
    public QuantidadeRegistros : number | undefined;
}

export enum StatusRetorno
{
    SUCESSO = 0,
    ERRO = 1,
    ERROHTTP = 2
}