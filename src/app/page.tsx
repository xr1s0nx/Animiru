import Card from "@/Components/Card/Card";
import { animeCards } from "@/static/tempData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Animiru",
    default: "Главная | Animiru",
  },
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className="main-page pt-[20px]">
      <h1 className={"text-[40px] text--colors_default font-bold pl-[10px]"}>Рекомендации</h1>
      <div className="flex items-center flex-wrap gap-[15px] pt-[40px] pl-[10px]">
        {animeCards.map((anime) => (
          <Card anime={anime} />
        ))}
      </div>
    </div>
  );
}