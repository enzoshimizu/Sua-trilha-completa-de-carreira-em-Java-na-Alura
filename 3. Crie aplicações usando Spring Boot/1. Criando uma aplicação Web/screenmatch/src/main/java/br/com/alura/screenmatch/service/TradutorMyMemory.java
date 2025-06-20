package br.com.alura.screenmatch.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URLEncoder;
import java.net.URL;

public class TradutorMyMemory {

    private static final String API_URL = "https://api.mymemory.translated.net/get";

    public static String traduzir(String textoIngles) {
        try {
            String textoCodificado = URLEncoder.encode(textoIngles, "UTF-8");
            String urlStr = API_URL + "?q=" + textoCodificado + "&langpair=en|pt-BR";

            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            StringBuilder resposta = new StringBuilder();
            try (BufferedReader br = new BufferedReader(
                    new InputStreamReader(conn.getInputStream(), "utf-8"))) {
                String linha;
                while ((linha = br.readLine()) != null) {
                    resposta.append(linha.trim());
                }
            }

            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(resposta.toString());
            return root.path("responseData").path("translatedText").asText();

        } catch (Exception e) {
            e.printStackTrace();
            return "Erro na tradução";
        }
    }
}
