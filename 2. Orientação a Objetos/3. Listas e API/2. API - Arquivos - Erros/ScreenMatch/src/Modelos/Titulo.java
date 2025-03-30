package Modelos;

import com.google.gson.annotations.SerializedName;

public class Titulo {
    private String nome;
    private int anoLancamento;
    private int duracaoMinutos;

    public Titulo(TituloOmdb tituloOmdb) {
        this.nome = tituloOmdb.title();
        String ano = tituloOmdb.year().replaceAll("[^0-9]", "");
        this.anoLancamento = ano.isEmpty() ? 0 : Integer.valueOf(ano);
        String duracao = tituloOmdb.runtime().replaceAll("[^0-9]", "");
        this.duracaoMinutos = duracao.isEmpty() ? 0 : Integer.valueOf(duracao);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public int getDuracaoMinutos() {
        return duracaoMinutos;
    }

    public void setDuracaoMinutos(int duracaoMinutos) {
        this.duracaoMinutos = duracaoMinutos;
    }

    @Override
    public String toString() {
        return "Nome: " + this.nome + " / Ano de Lançamento: " + this.anoLancamento + " / Duração: " + this.duracaoMinutos + " minutos";
    }
}
