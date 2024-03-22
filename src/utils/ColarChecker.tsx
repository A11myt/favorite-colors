
export const ColorChecker = (color: string) => {
    const element = document.createElement('div');
    element.style.color = color;
    return element.style.color !== '';
}
