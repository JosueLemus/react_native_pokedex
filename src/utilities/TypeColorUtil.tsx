interface TypeColors {
  dark: string;
  dragon: string;
  electric: string;
  fairy: string;
  fighting: string;
  fire: string;
  flying: string;
  ghost: string;
  grass: string;
  ground: string;
  ice: string;
  normal: string;
  poison: string;
  psychic: string;
  rock: string;
  steel: string;
  bug: string;
  water: string;
  [key: string]: string;
}

export class TypeColorUtil {
  static typeColor: TypeColors = {
    dark: '#58575F',
    dragon: '#0F6AC0',
    electric: '#EED535',
    fairy: '#ED6EC7',
    fighting: '#D04164',
    fire: '#FD7D24',
    flying: '#748FC9',
    ghost: '#556AAE',
    grass: '#62B957',
    ground: '#DD7748',
    ice: '#61CEC0',
    normal: '#A8A878',
    poison: '#9DA0AA',
    psychic: '#EA5D60',
    rock: '#BAAB82',
    steel: '#417D9A',
    bug: '#8CB230',
    water: '#4A90DA',
  };

  static backgroundTypeColor: TypeColors = {
    dark: '#8BD674',
    dragon: '#7383B9',
    electric: '#F2CB55',
    fairy: '#EBA8C3',
    fighting: '#EB4971',
    fire: '#FFA756',
    flying: '#83A2E3',
    ghost: '#8571BE',
    grass: '#8BBE8A',
    ground: '#F78551',
    ice: '#91D8DF',
    normal: '#B5B9C4',
    poison: '#9F6E97',
    psychic: '#FF6568',
    rock: '#D4C294',
    steel: '#4C91B2',
    bug: '#8BD674',
    water: '#58ABF6',
  };

  static getTypeColor = (type: keyof TypeColors) => {
    return TypeColorUtil.typeColor[type] || '#A8A8A8'; // Default to gray if the type is not found
  };

  static getBackgroundTypeColor = (type: keyof TypeColors) => {
    return TypeColorUtil.backgroundTypeColor[type] || '#E0E0E0'; // Default to light gray if the type is not found
  };
}
