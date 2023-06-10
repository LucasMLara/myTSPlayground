function isAcceptablePassword(password: string): boolean {
  if (password.includes('password')) return false;
  if (password.length > 9) return true;
  return (
    password.length > 6 && /\d/.test(password) && /[A-Za-z]/.test(password)
  );
}
