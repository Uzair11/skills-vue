import axios from 'axios';
import ContactForm from '../../src/components/ContactForm.vue';

jest.mock('axios');

it('sends a post request to mock api with email, message and subject', async () => {
  (axios.post as jest.Mock).mockResolvedValue({
    info: '...Some info...',
    success: true,
  });

  const response = await ContactForm?.methods?.FormSubmit({
    subject: 'skills-vue Submission',
    email: 'test@gmail.com',
    message: 'this is my song and no one can take it away.',
  });

  expect(response).toContain({
    success: true,
  });
});

jest.resetAllMocks();
