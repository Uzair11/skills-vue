import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockResponse = {
  info: '...mock response...',
  success: true,
};
const ax = axios.create();
const mock = new MockAdapter(ax);

mock.onPost('https://enociv9ekmecyez.m.pipedream.net').reply(200, mockResponse);

describe('ContactForm.vue', () => {
  it('sends a post request to mock api with email, message and subject', async () => {
    const response = await ax.post('https://enociv9ekmecyez.m.pipedream.net', {
      subject: 'skills-vue Submission',
      email: 'test@gmail.com',
      message: 'test message.',
    });

    expect(response.data.success).toEqual(true);
  });
});

jest.resetAllMocks();
