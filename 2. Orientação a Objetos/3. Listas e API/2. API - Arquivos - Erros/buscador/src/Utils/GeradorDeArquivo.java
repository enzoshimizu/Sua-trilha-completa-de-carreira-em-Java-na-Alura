package Utils;

import Modelos.Endereco;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;

public class GeradorDeArquivo {
    public static void salvaJson(Endereco endereco){
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try(FileWriter escritor = new FileWriter("endereco.json");) {
            escritor.write(gson.toJson(endereco));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
