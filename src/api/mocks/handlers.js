import { rest } from 'msw';

const mockData = {
  auth: {
    login: { token: 'mock-token', user: { id: 1, name: 'Mock User' } },
    register: { success: true },
  },
  courses: [
    { id: 1, name: 'Math 101', description: 'Introductory Mathematics' },
    { id: 2, name: 'Science 101', description: 'Introductory Science' },
  ],
  students: [
    { id: 1, name: 'John Doe', email: 'john@example.com', courseId: 1 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', courseId: 2 },
  ],
  reports: [
    { id: 1, title: 'Attendance Report', content: 'Attendance details...' },
    { id: 2, title: 'Performance Report', content: 'Performance details...' },
  ],
};

export const handlers = [
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(ctx.json(mockData.auth.login));
  }),
  rest.post('/api/auth/register', (req, res, ctx) => {
    return res(ctx.json(mockData.auth.register));
  }),
  rest.get('/api/courses', (req, res, ctx) => {
    return res(ctx.json(mockData.courses));
  }),
  rest.get('/api/courses/:id', (req, res, ctx) => {
    const { id } = req.params;
    const course = mockData.courses.find(c => c.id === parseInt(id));
    return res(ctx.json(course || {}));
  }),
  rest.get('/api/students', (req, res, ctx) => {
    return res(ctx.json(mockData.students));
  }),
  rest.get('/api/students/:id', (req, res, ctx) => {
    const { id } = req.params;
    const student = mockData.students.find(s => s.id === parseInt(id));
    return res(ctx.json(student || {}));
  }),
  rest.get('/api/reports', (req, res, ctx) => {
    return res(ctx.json(mockData.reports));
  }),
  rest.get('/api/reports/:id', (req, res, ctx) => {
    const { id } = req.params;
    const report = mockData.reports.find(r => r.id === parseInt(id));
    return res(ctx.json(report || {}));
  }),
];
