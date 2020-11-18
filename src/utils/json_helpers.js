import { readFile } from './_file';

export const readJSON = async path => {
  try {
    const data = await readFile(path);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};
