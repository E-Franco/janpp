export class ModeloBase
{
    public Id : number = 0;
    public DataCriacao : Date = new Date();
    public DataAlteracao : Date | undefined;
    public Ativo : boolean = true;
    public Versao : number = 0
}