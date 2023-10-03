import { ActionEmailType } from '../../types/type';

export const USER_EMAIL = 'USER_EMAIL';

export function saveEmail(email: string): ActionEmailType {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}
