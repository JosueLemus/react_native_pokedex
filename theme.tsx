// Define una interfaz para la estructura del tema
export interface CustomTheme {
    containerBackgroundColor: string;
    switchButtonBackgroundColor: string;
    titleTextColor: string;
    secondaryTextColor: string;
    backgroundInput: string;
    textSize: number;
}

// Define tus temas utilizando la interfaz
export const lightTheme: CustomTheme = {
    containerBackgroundColor: 'white',
    switchButtonBackgroundColor: '#ccc',
    titleTextColor: '#17171B',
    secondaryTextColor: '#262626',
    backgroundInput: '#F2F2F2',
    textSize: 14
};

export const darkTheme: CustomTheme = {
    containerBackgroundColor: 'black',
    switchButtonBackgroundColor: '#ccc',
    titleTextColor: 'white',
    secondaryTextColor: 'red',
    backgroundInput: '#121212',
    textSize: 40
};