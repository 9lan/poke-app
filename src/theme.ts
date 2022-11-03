export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
  },
  fonts: {
    primary: "Rubik",
    secondary: "Nunito Sans",
  },
};
