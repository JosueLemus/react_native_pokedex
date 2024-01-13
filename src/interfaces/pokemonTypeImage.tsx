interface Image {
    name: string;
    image: any;
  }
  
  export class BackgroundImage {
    private static images: Array<Image> = [
      {
        name: 'dark.png',
        image: require('../assets/poketypes/dark.png'),
      },
      {
        name: 'dragon.png',
        image: require('../assets/poketypes/dragon.png'),
      },
      {
        name: 'electric.png',
        image: require('../assets/poketypes/electric.png'),
      },
      {
        name: 'fairy.png',
        image: require('../assets/poketypes/fairy.png'),
      },
      {
        name: 'fighting.png',
        image: require('../assets/poketypes/fighting.png'),
      },
      {
        name: 'fire.png',
        image: require('../assets/poketypes/fire.png'),
      },
      {
        name: 'flying.png',
        image: require('../assets/poketypes/flying.png'),
      },
      {
        name: 'ghost.png',
        image: require('../assets/poketypes/ghost.png'),
      },
      {
        name: 'grass.png',
        image: require('../assets/poketypes/grass.png'),
      },
      {
        name: 'ground.png',
        image: require('../assets/poketypes/ground.png'),
      },
      {
        name: 'ice.png',
        image: require('../assets/poketypes/ice.png'),
      },
      {
        name: 'normal.png',
        image: require('../assets/poketypes/normal.png'),
      },
      {
        name: 'poison.png',
        image: require('../assets/poketypes/poison.png'),
      },
      {
        name: 'psychic.png',
        image: require('../assets/poketypes/psychic.png'),
      },
      {
        name: 'rock.png',
        image: require('../assets/poketypes/rock.png'),
      },
      {
        name: 'steel.png',
        image: require('../assets/poketypes/steel.png'),
      },
      {
        name: 'bug.png',
        image: require('../assets/poketypes/bug.png'),
      },
      {
        name: 'water.png',
        image: require('../assets/poketypes/water.png'),
      },
    ];
  
    static GetImage = (name: string) => {
      const found = BackgroundImage.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }
  