import { GetStaticProps } from 'next'
import { Card, Grid, Row,Text } from '@nextui-org/react';
import type { NextPage } from "next";

import { Layout } from "../components/Layouts";
import { pokeApi } from '../api';

import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
      <Layout title="Listado de Pokemon">
        <>
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemons={pokemon}/>
          ))}
        </Grid.Container>
        </>

      </Layout>
  );
};


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  console.log(data);
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i=0) => ({
    ...poke,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}
export default HomePage;

