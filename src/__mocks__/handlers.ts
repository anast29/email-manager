import { http, HttpResponse } from 'msw';
import { IEmail } from 'interfaces';
import { generateRandomEmail } from 'helpers';
import emails from './mockEmails.json';

const emailData = emails as IEmail[];

export const handlers = [
  http.get('/api/emails', () => {
    return HttpResponse.json({ data: emailData });
  }),

  http.patch('/api/emails/:id', async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json();

    const index = emailData.findIndex(({ id: emailId }) => emailId === id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Email not found' }, { status: 404 });
    }

    emailData[index] = { ...emailData[index], ...updates as {} };
    return HttpResponse.json({ data: emailData[index] });
  }),

  http.post('/emails/new', () => {
    const newEmail = generateRandomEmail();
    emailData.unshift(newEmail);
    return HttpResponse.json({ data: newEmail }, { status: 201 });
  }),
];
