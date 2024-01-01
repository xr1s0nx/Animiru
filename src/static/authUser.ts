import { useAppDispatch } from "./hooks";
import { Users } from "./tempData";

export const authUser = (user: { email: string; password: string }) => {
  if (Users.map((user) => user.email).includes(user.email)) {
    const findedUser = Users.find((tempUser) => tempUser.email === user.email);

    if (findedUser && findedUser.password === user.password) {
      return findedUser;
    }

    throw new Error("Неверный логин или пароль");
  }

  throw new Error("Пользователь не найден");
};
