import app from './app.js';
import path from 'path';
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});