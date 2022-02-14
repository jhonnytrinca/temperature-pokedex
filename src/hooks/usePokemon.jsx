import { useCallback, useState } from 'react';
import _ from 'lodash';
import { PokemonService } from '../services';

const usePokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState('');
  const [pokemons, setPokemons] = useState({
    allPokemon: {},
    pkm: {},
    ddt: '',
    ddf: '',
    ndf: ''
  });
  const [photos, setPhotos] = useState();
  const [carousel, setCarousel] = useState([])

  const getPokemon = useCallback(async (weather) => {
    await PokemonService.getPokemon(weather)
      .then((res) => {
        const { name, pokemon, damage_relations } = res.data;
        const dmg = damage_relations;
        setType(name);
        setPokemons({
          allPokemon: pokemon,
          pkm: _.sample(pokemon),
          ddt: dmg.double_damage_to,
          ddf: dmg.double_damage_from,
          ndf: dmg.no_damage_from
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getPhoto = useCallback(async (url) => {
    await PokemonService.getPhoto(url)
      .then((res) => setPhotos(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getCarousel = useCallback(async (random) => {
    const responses = await Promise.all(random.filter(item => item.pokemon.url).map(item => 
    PokemonService.getPhoto(item.pokemon.url).then(res => res.data)
    ))
    setCarousel(responses)
    setIsLoading(false);
  }, [])

  return {
    isLoading,
    getPokemon,
    getPhoto,
    getCarousel,
    type,
    pokemons,
    photos,
    carousel
  };
};

export default usePokemon;
