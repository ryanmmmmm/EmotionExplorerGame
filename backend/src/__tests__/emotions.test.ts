import request from 'supertest';
import app from '../index';

describe('GET /api/emotions', () => {
  it('returns seeded emotions and metrics are accessible', async () => {
    const response = await request(app).get('/api/emotions');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('name');
  });
});
