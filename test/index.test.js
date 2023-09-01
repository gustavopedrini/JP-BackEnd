const { describe, expect, it } = require('@jest/globals');
const { somar } = require("../Exercicios/exercicio1");

describe('Testes do Primeiro Exercício', () => {
    
    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });
  
    it('Deve somar dois números', () => {
    const result = somar(1, 2);

    expect(result).toBe(3);
    });

});

