import Head from "next/head";
import Image from "next/image";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    setPokemons(getOptionsForVote());
  }, []);
  const [pokemons, setPokemons] = useState<number[]>([]);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounder</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-800">{pokemons[0]}</div>
        <div className="p-8">VS</div>
        <div className="w-16 h-16 bg-red-800">{pokemons[1]}</div>
      </div>
    </div>
  );
}
