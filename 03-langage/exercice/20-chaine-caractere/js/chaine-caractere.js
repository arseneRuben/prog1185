const phrase = "the strength of javaScript is that you can do anything. The weakness is that you will."
console.log("La phrase entière : " + phrase)
console.log("La longueur de la chaine de caractères : " , phrase.length)
console.log("La position du mot  javaScript : " , phrase.indexOf("javaScript"))
console.log("La position du dernier mot is : " , phrase.lastIndexOf("is"))
console.log("La dernier phrase seulement  : " , phrase.split(".")[1])
console.log("Les 10 caractères a partir du  17iem caractère : " , phrase.substring(16, 26))
console.log("combien de mot dans la phrase : " , phrase.split(" ").length)
console.log("Le 61iem caractère : " , phrase[60])
const m = phrase.replaceAll("you", "I")
console.log("remplacer \'you\' par \'I\' dans toute la phrase: " , m)