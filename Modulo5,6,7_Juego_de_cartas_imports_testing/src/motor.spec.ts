import { vi } from "vitest";
import { devolverMensaje, numeroAleatorio, numerosCartas, puntuacionCarta } from "./motor";
import { partida } from "./model";

describe("devolverMensaje", () => {
  it("Si la puntuacion es 7.5 devuelve el mensaje ganador"), () => {
        //Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
        const puntuacion:number = 7.5;
        const partidaGanada = '¡Has ganado la partida!';

        //Act
        const resultado = devolverMensaje(puntuacion)

        //Assert
        expect(resultado).toBe(partidaGanada)
    };
  
    it("Si la puntuacion es mayor a 7.5 devuelve el mensaje perdedor"), () => {
        //Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);
        const puntuacion:number = 8;
        const partidaGanada = 'Partida perdida. ¡Inténtalo de nuevo!';

        //Act
        const resultado = devolverMensaje(puntuacion)

        //Assert
        expect(resultado).toBe(partidaGanada)
    };
});

describe("numeroAleatorio", () => {
    it("Forzar a Math Random a que devuelva un 1, deberia devolver 1", () => {
        // Arrange 
        const numeroEsperado = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(0);
        
        // Act
        const resultado = numeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });

    
    it("Forzar a Math Random a que devuelva un 10, deberia devolver 10", () => {
        // Arrange 
        const numeroEsperado = 10;
        vi.spyOn(global.Math, "random").mockReturnValue(0.999);
        
        // Act
        const resultado = numeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });
});

describe("numerosCartas", () => {
    it("Deberia devolver valor + 2, si valor es mayor que 7", () => {
        // Arrange 
        const valor = 8;
        const resultadoEsperado = 10;
        
        // Act
        const resultado = numerosCartas(valor);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("puntuacionCarta", () => {
    it("Deberia devolver el valor de la carta, en caso de que sea menor que 7, el valor de la carta y la puntuacion son lo mismo", () => {
        // Arrange 
        const valor = 4;
        const resultadoEsperado = 4;
        
        // Act
        const resultado = puntuacionCarta(valor);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

        
    it("Deberia devolver el valor de la carta, en caso de que sea mayor que 7 el valor de la carta es 0.5", () => {
        // Arrange 
        const valor = 10;
        const resultadoEsperado = 0.5;
        
        // Act
        const resultado = puntuacionCarta(valor);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});