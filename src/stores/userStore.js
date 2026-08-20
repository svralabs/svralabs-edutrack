// src/stores/userStore.js
import { useState } from 'react';

export default function useUserStore() {
  const [user, setUser] = useState(null);
  const clearUser = () => setUser(null);
  return { user, setUser, clearUser };
}
