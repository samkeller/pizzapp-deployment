import "./env";
import app from './app'
const path = require('path');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "..", "react-app", 'build', 'index.html')));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

