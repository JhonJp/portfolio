export const capitalizeFirstLetter = (text: any) => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : null;
}