import express from 'express';

const router = express.Router();

router.get('/info', (req, res) => {
  res.send('Post route is working');
});
// router.post('/login', (req, res) => {
//   res.send('Post route is working');
// });
// router.post('/logout', (req, res) => {
//   res.send('Post route is working');
// });

export default router;