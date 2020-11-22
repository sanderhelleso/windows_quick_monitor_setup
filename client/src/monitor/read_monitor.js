import screenres from 'screenres';

export const getScreenSize = () => {
  const [width, height ] = screenres.get();
  return { width, height };
};
