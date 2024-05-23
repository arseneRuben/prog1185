'use strict'

const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
];

const phrase2_order=[1,0,3,2];
const phrase3_order=[3,2,0,1];
const phrase4_order=[2,0,3,1];

const phrase1=tableau.join(VIRGULE);
const phrase2=phrase2_order.map(index => tableau[index]).join(VIRGULE);
const phrase3=phrase3_order.map(index => tableau[index]).join(VIRGULE);
const phrase4=phrase4_order.map(index => tableau[index]).join(VIRGULE);

document.write("<ul>" 
 +"<li> " + phrase1 +"."+ "</li>" 
 +"<li> " + phrase2+ "."+ "</li>"
 +"<li> " + phrase3+ "."+ "</li>"
 +"<li> " + phrase4+ "."+ "</li>"
 +"</ul>");




