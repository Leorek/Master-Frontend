/** Head
   Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. 
   Utiliza destructuring. */
const head = (arr: any[]): any => {
  if (arr) {
    const [head] = arr;
    return head;
  }
  return null;
};

/** Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. 
Utiliza rest operator. */
const tail = (arr: any[]): any[] => {
  if (arr) {
    const [, ...tail] = arr;
    return tail;
  }
  return [];
};

/** Init 
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype. */

const init = (arr: any[]): any[] => {
  if (arr) {
    return arr.slice(0, arr.length - 1);
  }

  return null;
};

/**Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento. */

const last = (arr: any[]): any => {
  if (arr) {
    return arr[arr.length - 1];
  }
  return null;
};

/**Concat
   Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. 
   Utiliza rest / spread operators. */
const concat = (arrA: any[], arrB: any[]): any[] => {
  return [...arrA, ...arrB];
};

/** Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2). */

// I have a doubt here

/**    Clone
   Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source */

const clone = (source: object): object => {
  return { ...source };
};

/** Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
TIP: Puedes usar la función "clone" del apartado A. */

const merge = (source: object, target: object) => {
  return { ...target, ...source };
};

/** Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
 * Un libro es un objeto con title como string y isRead como booleano.
 * En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón. */

type Book = {
  title: string;
  isRead: boolean;
};

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const book = books.find((book) => book.title.includes(titleToSearch));

  if (book != null) {
    return book.isRead;
  }

  return false;
};

class SlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }
  play(): void {
    this.coins += 1;

    const tries = [true, true, true];

    const hasWon = tries.reduce(
      (hasWonPrevious) => hasWonPrevious && Math.random() >= 0.5,
      true
    );

    if (hasWon) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    } else {
      console.log("Good luck next time!!");
    }
  }
}
