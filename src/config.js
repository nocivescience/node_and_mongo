import {config} from 'dotenv';
config();
const configuration = {
    PORT: process.env.PORT || 4000,
};
export default configuration;