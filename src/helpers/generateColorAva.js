import tinycolor from "tinycolor2";

const getCorrectIndex = number => {
    return number > 255 ? 255 : number < 0 ? 0 : number
}

const generateColorAva = (hash) => {
    const [r, g, b] = hash
        .substr(0, 3)
        .split('')
        .map(char => getCorrectIndex(char.charCodeAt(0)));
    const color = tinycolor({ r, g, b });
    const colorLighten = tinycolor({ r, g, b }).lighten(45);
    return {
        color: color.toHexString(),
        colorLighten: colorLighten.toHexString()};
};

export default generateColorAva;