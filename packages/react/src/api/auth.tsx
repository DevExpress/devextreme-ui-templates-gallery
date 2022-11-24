import { defaultUser } from '../utils/default-user';

export async function signIn(email: string, password: string) {
  try {
    // Send request
    return {
      isOk: true,
      data: { ...defaultUser, email, password },
    };
  } catch {
    return {
      isOk: false,
      message: 'Authentication failed',
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function createAccount(email: string, password: string) {
  try {
    // Send request
    return {
      isOk: true,
      data: { email, password },
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to create account',
    };
  }
}

export async function changePassword(email: string, recoveryCode?: string) {
  try {
    // Send request
    return {
      isOk: true,
      data: { email, recoveryCode },
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to change password',
    };
  }
}

export async function resetPassword(email: string) {
  try {
    // Send request
    return {
      isOk: true,
      data: { email },
    };
  } catch {
    return {
      isOk: false,
      message: 'Failed to reset password',
    };
  }
}
