let convictions = [];

export const useConvictions = () => {
  console.log("convictions ", convictions);
  return convictions;
};

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedCrimes) => {
      console.table(parsedCrimes);
      convictions = parsedCrimes;
    });
};
