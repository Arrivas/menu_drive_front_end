import jwtDecode from 'jwt-decode';

export const getCurrentUser = () => {
  let token: any = '';

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('FBIdToken')?.split(' ')[1];
    if (!token) return null;
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.clear();
      return null;
    }
  }

  return {
    user: jwtDecode(token),
    token,
  };
};
