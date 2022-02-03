import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';

function logoutFromApp(): void {
  signOut(auth);
}

export { logoutFromApp };
