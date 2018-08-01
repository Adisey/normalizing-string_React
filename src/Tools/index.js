/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 01.08.2018
 * Time: 12:44
 */


export const createLine = (length = 15) => {
    if (typeof length !== "number") {
        throw new Error ("Аргумент функции должен быть числом!");
    }

    let text = "";
    const possible =
        "abcdefghijklmnopqrstuvwxyz";

    for ( let i = 0; i < length; i++ ) {
        text += possible.charAt (Math.floor (Math.random () * possible.length));
    }

    return text;
};


const vowels = 'aeiouy';
// const consonants = 'bcdfghjklmnpqrstvwxz';


export const itsVowel = (letter) => {
    if (letter.length > 1) {
        console.error (`Передана строка больше чем из одного символа!`);
        letter = letter[0];
    }
    if (vowels.indexOf (letter) < 0) return false;
    return true;

};


export const normalizeString = (processedString) => {
    // подсчитываем поличество глассных м согласных в строке
    let countV = 0;
    let countC = 0;
    for ( let i = 0; i < processedString.length; i++ ) {
        if (itsVowel (processedString[i])) {
            countV++;
        } else {
            countC++;
        }
    }
    // console.log (`countV - `, countV, `countC - `, countC);
    let countVP = 0;
    let countCP = 0;
    let currentLetterItsVowel;
    let previousLetterItsVowel = itsVowel (processedString[0]);
    if (previousLetterItsVowel) {
        countVP++;
    } else {
        countCP++;
    }
    // let countI = 1; // Счётчик от зацикливания
    for ( let i = 1; i < processedString.length; i++ ) {
        // countI++;
        currentLetterItsVowel = itsVowel (processedString[i]);
        // Если прошли по всем буквам тебеющим переноса останавливаем перебор.
        if (countC === countCP || countV === countVP) break;

        if (previousLetterItsVowel === currentLetterItsVowel) {
            // если следующая буква того же типа, переносим.
            processedString = processedString.substr (0, i) + processedString.substr (i + 1) + processedString.substr (i, 1);
            // console.log (`processedString + `, processedString, 'i - ', i, 'L - ', processedString.substr (i, 1));
            i--;
        } else {
            if (currentLetterItsVowel) {
                countVP++;
            } else {
                countCP++;
            }
            previousLetterItsVowel = currentLetterItsVowel;
            // console.log (`processedString - `, processedString, 'i - ', i, 'VP-',countVP, 'CP-',countCP);
        }
        // if (countI > processedString.length * 5) break;
    }
    // Переносим на следующую строку хвост из гласных, если он есть
    if (itsVowel (processedString[processedString.length-1])) {
        for ( let i = processedString.length-1; i >0; i-- ) {
            if (! itsVowel (processedString[i])) {
                processedString = processedString.substr(0,i-1) + '\n' +  processedString.substr(i+1);
                break;
            }
        }
    }

    // console.log (`originalString  = `, originalString);
    // console.log (`processedString - `, processedString);
    return processedString;
};
