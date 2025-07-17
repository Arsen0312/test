export const getColorPack = (rating: number): { bg: string, text: string } => {
    if (rating === 5) {
        return {
            bg: "rgba(29, 180, 98, 0.08)",
            text: "rgba(29, 180, 98, 1)"
        }
    } else if (rating >= 4) {
        return {
            bg: "rgba(255, 229, 0, 0.08)",
            text: "rgba(225, 176, 0, 1)"
        }
    }  else if (rating >= 3) {
        return {
            bg: "rgba(255, 142, 38, 0.08)",
            text: "rgba(255, 142, 38, 1)"
        }
    }  else {
        return {
            bg: "rgba(255, 92, 92, 0.08)",
            text: "rgba(255, 92, 92, 1)"
        }
    }
}