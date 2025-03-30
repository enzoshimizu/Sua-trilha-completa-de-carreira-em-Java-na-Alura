package Principal;

import Modelos.Titulo;
import Modelos.TituloOmdb;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Principal {
    private static final String APIBASEURL = "https://www.omdbapi.com";
    private static final String APIKEY = "cd7cf36e";

    public static void main(String[] args) {
        String busca = "";
        Scanner leitura = new Scanner(System.in);
        List<Titulo> titulos = new ArrayList<>();
        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .setPrettyPrinting()
                .create();

        while (true) {
            System.out.println("Digite um filme para busca: ");
            busca = leitura.nextLine();

            if (busca.equalsIgnoreCase("sair")){
                break;
            }

            try {
                busca = URLEncoder.encode(busca, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                System.out.println("Aconteceu um erro: ");
                System.out.println(e.getMessage());

                return;
            }

            String apiUrl = APIBASEURL + "?t=" + busca + "&apiKey=" + APIKEY;

            try {

                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder().uri(URI.create(apiUrl)).build();
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                //System.out.println(response.body());

                String json = response.body();

                TituloOmdb meuTituloOmdb = gson.fromJson(json, TituloOmdb.class);

                Titulo meuTitulo = null;


                meuTitulo = new Titulo(meuTituloOmdb);

                titulos.add(meuTitulo);
            } catch (IllegalArgumentException | IOException | InterruptedException e) {
                System.out.println("Aconteceu um erro: ");
                System.out.println(e.getMessage());
            }
        }
        //System.out.println(titulos);
        //System.out.println(gson.toJson(titulos));

        try(FileWriter escrita = new FileWriter("filmes.json")) {
            escrita.write(gson.toJson(titulos));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Programa finalizado.");
    }
}
