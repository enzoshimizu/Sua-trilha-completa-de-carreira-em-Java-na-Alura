package br.com.alura.minhasmusicas.modelos;

public class MinhasPreferidas {
    public static void inclui(Audio audio) {
        if (audio.getClassificacao() >= 8) {
            System.out.println(audio.getTitulo() + " é considerado sucesso absoluto.");
        } else {
            System.out.println(audio.getTitulo() + " também é um dos que todo mundo curte.");
        }
    }
}
