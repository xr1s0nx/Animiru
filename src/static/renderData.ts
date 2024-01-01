import { HomeIcon, NewspaperIcon, TrendingUpIcon } from "lucide-react";

export const NAV_LINKS: {
  title: string;
  link: string;
  icon: any;
}[] = [
  {
    title: "Главная",
    link: "/",
    icon: HomeIcon,
  },
  {
    title: "Тренды",
    link: "/trending",
    icon: TrendingUpIcon,
  },
  {
    title: "Новости",
    link: "/news",
    icon: NewspaperIcon,
  },
];

export const LOGIN_NAV = ["Войти", "Зарегистрироваться"];
