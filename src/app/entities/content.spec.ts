import { Content } from './content';

describe('Notification Content', () => {
  test('eu espero que seja enviado uma notificação em content', () => {
    const content = new Content('Você Recebeu uma Solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('eu espero que o content tenha menos de 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  test('eu espero que o content tenha mais de 240 caracteres', () => {
    expect(() => new Content('a'.repeat(252))).toThrow();
  });
});
