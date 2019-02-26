
/**
 * @description zde vám chci ukázat použití operátorů IS a IN
 * @interface User
 */


interface User {
    id : string;
    email : string;
}

interface Admin extends User {
    role : 'sys',
    kukacka : 'Pali'
}

/**
 * @description typescript v obou případech automaticky detekuje, že se jedná o rozhraní admin
 * pak dokáže napovídat proměnné admina
 * @param {(User | Admin)} user
 */
function redirect(user : User | Admin) {
    if (isAdmin(user)) {
        console.log(user.role);
    }

    if ('role' in user) {
        console.log(user.kukacka);
    }
}

/**
 * @description vrací boolean hodnotu, zda je uživatel instance rozhraní admin
 * zjišťuje to tak, že testuje klíč role, který má pouze admin
 * @param {(User|Admin)} user
 * @returns {user is Admin}
 */
function isAdmin(user : User | Admin) : user is Admin {
    return (
        <Admin>user).role !== undefined; } /** * příklad volání funkce isAdmin s
            konkrétním objectem */ const milan: User = {id : 'milan',
            email : 'kuku@onio.cz'
}