export const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePasswords = (password: any, confirmPassword: any) => {
    return password === confirmPassword;
  };