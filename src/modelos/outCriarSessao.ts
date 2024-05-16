export class OutCriarSessao{
    public data : Sessao = new Sessao();
    public signature : string | undefined;
}
export class Sessao{
    public id_sesion : Number | undefined;
    public deeplink: string | undefined;
    public url_acceso_paciente: string | undefined;//link que devo abrir
    public timestamp: string | undefined;
}