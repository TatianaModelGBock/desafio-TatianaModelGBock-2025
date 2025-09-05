import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

 
  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,RATO,BOLA', 'LASER,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeNull();
  });

  test('Deve rejeitar animal duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'LASER,BOLA', 'Rex,Rex');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeNull();
  });

  
  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
    expect(resultado.lista[0]).toBe('Fofo - abrigo');
    expect(resultado.lista[1]).toBe('Rex - pessoa 1');
    expect(resultado.lista.length).toBe(2);
    expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER',
      'Mimi,Fofo,Rex,Bola'
    );
    expect(resultado.lista[0]).toBe('Bola - abrigo');
    expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
    expect(resultado.lista[2]).toBe('Mimi - abrigo');
    expect(resultado.lista[3]).toBe('Rex - abrigo');
    expect(resultado.lista.length).toBe(4);
    expect(resultado.erro).toBeFalsy();
  });

  
  test('Loco só pode ser adotado se tiver companhia', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'SKATE,RATO,BOLA', 'RATO,NOVELO', 'Loco'
    );
    expect(resultado.lista[0]).toBe('Loco - abrigo'); // sozinho, vai pro abrigo

    const resultado2 = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,SKATE', 'LASER,NOVELO', 'Rex,Loco'
    );
    expect(resultado2.lista).toContain('Rex - pessoa 1');
    expect(resultado2.lista).toContain('Loco - pessoa 1'); // com companhia, pode ser adotado
  });

  test('Pessoa não pode adotar mais de 3 animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,LASER,CAIXA,NOVELO,SKATE',
      'RATO',
      'Rex,Mimi,Fofo,Zero,Bola,Bebe'
    );
    const adotadosP1 = resultado.lista.filter(l => l.includes('pessoa 1'));
    expect(adotadosP1.length).toBe(3); // nunca mais que 3
  });
});

