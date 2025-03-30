package Principal;

import Modelos.Endereco;
import Utils.GeradorDeArquivo;
import Webservices.ConsultaCep;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.println("Digite um número de CEP para consulta:");
        String cep = leitor.nextLine();

        Endereco endereco = ConsultaCep.buscaEndereco(cep);

        if (!(endereco == null)){
            GeradorDeArquivo.salvaJson(endereco);
        }

        System.out.println("Programa finalizado.");
    }
}
