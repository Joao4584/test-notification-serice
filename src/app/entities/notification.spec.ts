import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('eu espero que crie uma notificação', () => {
    const notification = new Notification({
      content: new Content('Nova Solicitação De Amizade'),
      category: 'social',
      recipientId: 'example-recipientIds',
    });

    expect(notification).toBeTruthy();
  });
});
