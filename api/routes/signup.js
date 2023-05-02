import { Router } from 'express';

export default (DataSource) => {
    const router = Router();
    router.post("/signup", (req, res) => {
        res.send();
    })
    return router;
}