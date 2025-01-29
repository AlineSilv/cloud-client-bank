export const fakeAuth = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'teste' && password === 'teste') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };