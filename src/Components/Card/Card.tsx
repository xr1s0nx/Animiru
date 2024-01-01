"use client";

import { AnimeCard } from "@/static/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/static/hooks";

function Card({ anime }: { anime: AnimeCard }) {
  const { navbarIsOpen } = useAppSelector((state) => state.mainSlice);

  return (
    <div style={{ maxWidth: navbarIsOpen ? "335px" : "360px" }} className={`${styles.card} w-full h-[500px] rounded-xl`}>
      <Image src={anime.image} objectFit="cover" layout="fill" alt="" className="block h-full w-full absolute top-[0px] left-0" />
      <div className={`${styles.descriptionBlock} w-full h-full p-[20px]`}>
        <div className={styles.info}>
          <h2 className={`${styles.title} font-bold text-white`}>{anime.title}</h2>
          <p className={`${styles.description}`}>{anime.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
