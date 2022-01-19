import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockResponse = {
  info: '...mock response...',
  success: true,
};
// mocking an axios instace instead of the entire module
const ax = axios.create();
const mock = new MockAdapter(ax);

// mock post overrides axios.post when requested on given url and returns a mockResponse
mock.onPost('https://enociv9ekmecyez.m.pipedream.net').reply(200, mockResponse);

describe('ContactForm.vue', () => {
  it('sends a post request to mock api with email, message and subject', async () => {
    const response = await ax.post('https://enociv9ekmecyez.m.pipedream.net', {
      subject: 'skills-vue Submission',
      email: 'test@gmail.com',
      message: 'test message.',
    });

    expect(response.data.success).toEqual(true); // test passes if response contains success: true
  });
});

// resetting mocks so that they dont effect other tests in the future
jest.resetAllMocks();
