const key = 'myList';
const initialValue = [{text: 'Hello! I am the Olympiad Oracle. Ask me anything about the NMTC, NPTC, NBTC, or NCTC!', sender: 'bot'}];

export function getLocalStorage() {
    const getList = JSON.parse(localStorage.getItem(key)) || initialValue;
    return getList;
}

export function useLocalStorage(valueToBeAdded) {
    let currentValue = getLocalStorage();
    currentValue.push(valueToBeAdded);
    localStorage.setItem(key, JSON.stringify(currentValue));
}