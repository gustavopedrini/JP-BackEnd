import { describe, expect, it } from '@jest/globals';
import { exercicio1 } from '../Exercicios/exercicio1.js';

describe('Testes do Primeiro Exercício', () => {
    
    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });
  
    it('Deve somar dois números', () => {
    const result = exercicio1(1, 2);

    expect(result).toBe(3);
    });

});