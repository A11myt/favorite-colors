export interface ICardLibrary {
    title: string;
    color: string;
    themeCollection: IThemeCollection[];
}
export interface IThemeCollection {
    title: string;
    colors: ICard[];
}

export interface ICard {
    title?: string;
    description?: string;
    color: string;
}

export interface IAddColorModal {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}