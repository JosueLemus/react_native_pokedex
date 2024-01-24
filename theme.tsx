// Define una interfaz para la estructura del tema
export interface CustomTheme {
    containerBackgroundColor: string;
    switchButtonBackgroundColor: string;
    titleTextColor: string;
    secondaryTextColor: string;
    backgroundInput: string;
    placeholderColor: String;
}

// Define tus temas utilizando la interfaz
export const lightTheme: CustomTheme = {
    containerBackgroundColor: 'white',
    switchButtonBackgroundColor: '#ccc',
    titleTextColor: '#17171B',
    secondaryTextColor: '#262626',
    backgroundInput: '#F2F2F2',
    placeholderColor: "#747476"
};

export const darkTheme: CustomTheme = {
    containerBackgroundColor: 'black',
    switchButtonBackgroundColor: '#ccc',
    titleTextColor: 'white',
    secondaryTextColor: 'white',
    backgroundInput: '#121212',
    placeholderColor: "#747476"
};