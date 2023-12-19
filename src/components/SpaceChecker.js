// если есть пробелы возвращает true

export const spaceCkecker = (string) => {
    const stringToCompare = string.replaceAll(' ', '')
    if (string !== stringToCompare) return false
    else return true
}
