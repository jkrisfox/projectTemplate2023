import { Router } from 'express';

export default (DataSource) => {
  const router = Router();
  const userRepo = DataSource.getRepository(User);
  router.post('/signup', (request, response) => {
    const {firstName, lastName, pwd, email} = request.body;
    const newUser = userRepo.create({
        firstName,
        lastName, 
        email,
        password: pwd
    });
    userRepo.save(newUser).then(() => {
        response.send();
    });
  });  
  return router;
}