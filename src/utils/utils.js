export const createKeywords = string => (
    string.toLowerCase()
          .split('')
          .reduce(({ kwds, strAcc }, letter) => {
              const kwd = strAcc + letter;

              return { kwds: [...kwds, kwd], strAcc: kwd };
          }, { kwds: [''], strAcc: ''}).kwds
);

export const errorPayload = (type, message) => ({
    error: type,
    message
});
