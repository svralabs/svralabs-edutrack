const users = [];

export const registerUser = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = users.find(user => user.email === userData.email || user.phone === userData.phone);
      if (existingUser) {
        reject(new Error('Email atau nomor telepon sudah terdaftar'));
      } else {
        users.push(userData);
        resolve({ success: true, message: 'Pendaftaran berhasil' });
      }
    }, 1000);
  });
};
