export enum BloodTypes {
  "A+" = "A+",
  "A-" = "A-",
  "B+" = "B+",
  "B-" = "B-",
  "AB+" = "AB+",
  "AB-" = "AB-",
  "O+" = "O+",
  "O-" = "O-",
}

export type BloodType = keyof typeof BloodTypes;

export const BloodTypesArray = Object.values(BloodTypes);

export const getRandomeBloodType = () => {
  const randomIndex = Math.floor(Math.random() * BloodTypesArray.length);
  return BloodTypesArray[randomIndex];
}

