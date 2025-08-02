import { firstNames, lastNames, streetNames, cities, states, countryToStates } from "./data";

export function generateCardNumber(): string {
  const prefix = Math.random() < 0.5 ? "4" : "5";
  let cardNumber = prefix;
  for (let i = 0; i < 15; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }
  return cardNumber.replace(/(\d{4})/g, '$1 ').trim();
}

export function generateExpDate(): string {
  const month = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0');
  const year = (Math.floor(Math.random() * 5) + new Date().getFullYear() % 100).toString();
  return `${month}/${year}`;
}

export function generateCvv(): string {
  let cvv = "";
  for (let i = 0; i < 3; i++) {
    cvv += Math.floor(Math.random() * 10);
  }
  return cvv;
}

export function generateRandomName(): string {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

export function generateCardType(): string {
    const types = ["Visa", "Mastercard", "American Express"];
    return types[Math.floor(Math.random() * types.length)];
}

export function generateRandomCountry(): string {
    const countries = Object.keys(countryToStates);
    return countries[Math.floor(Math.random() * countries.length)];
}

export function generateRandomState(): string {
    return states[Math.floor(Math.random() * states.length)];
}

export function generateRandomCity(): string {
    return cities[Math.floor(Math.random() * cities.length)];
}

export function generateRandomZip(): string {
    let zip = "";
    for (let i = 0; i < 5; i++) {
        zip += Math.floor(Math.random() * 10);
    }
    return zip;
}

export function generateRandomEmail(): string {
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase();
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase();
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomFirstName}.${randomLastName}@${randomDomain}`;
}

export function generateRandomPhoneNumber(): string {
    let phone = "+1-";
    for (let i = 0; i < 3; i++) {
        phone += Math.floor(Math.random() * 10);
    }
    phone += "-";
    for (let i = 0; i < 3; i++) {
        phone += Math.floor(Math.random() * 10);
    }
    phone += "-";
    for (let i = 0; i < 4; i++) {
        phone += Math.floor(Math.random() * 10);
    }
    return phone;
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}