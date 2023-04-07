import { BASE_IMAGE_URL } from "./constants"

export const getImageUrl = (size = "original", imgPath: string) => {
    return `${BASE_IMAGE_URL}${size}/${imgPath}`;
}