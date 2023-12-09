// true если в строке есть @

export const mailCkecker = (string) => {

    const stringToCompare = string.replaceAll('@', '')
    if (string === stringToCompare)
        return false

    else
        return true

}