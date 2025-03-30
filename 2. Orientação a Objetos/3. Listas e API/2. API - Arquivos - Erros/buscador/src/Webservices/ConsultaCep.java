package Webservices;

import Modelos.Endereco;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.regex.Pattern;

public class ConsultaCep {
    public static Endereco buscaEndereco(String cep){
        Pattern cepPattern = Pattern.compile("\\d{8}");
        if (!cepPattern.matcher(cep).matches()){
            System.out.println("Formato de CEP inválido.");
            return null;
        }

        Gson gson = new GsonBuilder().create();

        try {
            cep = URLEncoder.encode(cep, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        URI endereco = URI.create("https://viacep.com.br/ws/" + cep + "/json/");

        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(endereco)
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            String json = response.body();
            Endereco resultado = gson.fromJson(json, Endereco.class);

            if (resultado.isErro()){
                System.out.println("CEP inexistente.");
                return null;
            } else {
                return resultado;
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
