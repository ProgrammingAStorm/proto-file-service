import express, { Request, Response } from 'express';
import config from '../config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.get('/dirs', (req: Request, res: Response) => {
    res.send(`dirs: ${config.directories.join(', ')}`);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});