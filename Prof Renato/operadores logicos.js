/**
 * *operadores lógicos
 * */

//E

//V verdadeiro
//F falso
/**
 *  V V = V
 * F V = F
 * V F = F
 * F F = F
  */

// média precisa ser maior ou igual 7E preciso ter , no mínimo, 80% de presença
const media= (3.5+6+10) / 3
const presença = 0.7
console.log (media>= 7&& presença >= 0.8) // se duas ou mais condições são verdadeiras

const media= (7+10+10) / 3
const presença = 0.7
console.log (media>= 7&& presença >= 0.8)  //false

const media= (7+18+10) / 3
const presença = 0.95
console.log (media>= 7 && presença >= 0.8)  //true

//Operador E exige que todas as condiçoes sejam verdadeiras

// operador OU

/**
 *  V V = V
 * F V = V
 * V F = V
 * F F = F
 * 
 * CONSOLE.LOG(4>7 || 3<2) //false
 * console.log(5>3.5 || 7>8) // true
 * 
 * const estado = "CE" //Ceará
 * console.log (estado == "SP" || estado == "MG") Minas Gerais
 * 
 * const idade = 30
 *// console.log(idade>= 16 || idade<60)
 */
//Operador Não negação
/**
 * 0 zero pode representar desligado
 * 1 = ligado
 * 
 * NOT V = F
 * NOT F = V
 * /
 * 
 const resultado= 5<3 //false

 console log (!resultado) //true  //! representa não no js, negação do valor booleano
 console.log (!true)
 console.log(!false)
 
 const logado = false

 if (!logado) {
    console.log ("Vc não pode acessar o meu site")
 }
 //if = Se


