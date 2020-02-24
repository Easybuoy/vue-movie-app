import dotenv from 'dotenv';

dotenv.config();
const { VUE_APP_API_BASE_URL } = process.env;

const configVariables = {
  API_BASE_URL: VUE_APP_API_BASE_URL
};

export default configVariables;
