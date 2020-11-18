import { readFile } from './asyncFile';

export const readJSON = async path => {
  try {
    const data = await readFile(path);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};
