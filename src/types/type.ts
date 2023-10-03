export type ActionEmailType = {
  type: string,
  payload: string
};

export type StateType = {
  user: EmailStateType
};

export type EmailStateType = {
  email: string
};
