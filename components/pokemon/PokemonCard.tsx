import { Card, Grid,Text, Row } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces/pokemon-list"

interface Props{
  pokemons: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemons}) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`name/${pokemons.name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemons.id}>
    <Card 
      onPress={onClick}
    isHoverable isPressable>
      <Card.Body css={{p:1 }}>
        <Card.Image src={pokemons.image} width="100%" height={140}/>
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
            <Text transform="capitalize">{pokemons.name}</Text>
            <Text># {pokemons.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}
