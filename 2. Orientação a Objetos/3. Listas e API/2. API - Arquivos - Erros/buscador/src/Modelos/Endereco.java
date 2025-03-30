package Modelos;

public record Endereco(String cep,
                       String logradouro,
                       String complemento,
                       String localidade,
                       String uf,
                       Boolean erro) {
    public boolean isErro(){
        return erro != null && erro;
    }
}
