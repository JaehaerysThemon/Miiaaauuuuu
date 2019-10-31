// ==UserScript==
// @name         Energy Star Night Bot 2019
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automates the question from Energy game
// @author       Jaehaerys Themon
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==

const mainDiv = document.getElementsByClassName('main')[0];
const questions = {
    "In welcher Eventlocation findet die Energy Star Night statt?" : "Hallenstadion, Zürich",
    "Energy Star Night Tickets kann man ausschliesslich…" : "gewinnen",
    "An wie vielen Standorten bietet LIPO aktuell alles an, was es zum Wohnen braucht" : "22",
    "Welcher Act eröffnete die Energy Star Night 2018?" : "Stefanie Heinzmann",
    "Welche Ticketkategorie wird nicht für die Energy Star Night verlost?" : "VIP",
    "Welcher dieser Acts hatte einen Auftritt an der Energy Star Night 2017?" : "Mark Forster",
    "Wie heisst der Hund im aktuellen Werbespot?" : "Mex",
    "Wann findet die Energy Star Night 2019 statt?" : "22. November 2019",
    "Wen küsste Energy Moderator Jontsch an der letztjährigen Energy Star Night?" : "Jastina Doreen, Ex-Miss Schweiz",
    "Wie viele Energy Star Night Tickets werden verlost?" : "14'000",
    "Wann fand die Energy Star Night (ehemals Energy Stars For Free) zum ersten Mal statt?" : "2003",
    "Die Energy Star Night hiess ehemals..." : "Energy Stars For Free",
    "Was versteckt sich hinter dem Begriff «Massdesign» bei LIPO?" : "Vorhänge individuell konfigurieren",
    "Wie lautete das Motto der Energy Star Night 2018?" : "«The Game Is On»",
    "Welches Unternehmen ist «Presenting Partner» der Energy Star Night?" : "Swisscom",
    "In welchen beiden Städten eröffnet LIPO am 22. November 2019 jeweils eine neue Filiale?" : "Davos und Grindelwald",
    "Wann ist Konzertbeginn der Energy Star Night?" : "Um 19:00 Uhr",
    "Was passiert, wenn es am Eventtag regnet?" : "Energy Star Night findet trotzdem statt",
    "Welches Unternehmen ist «Medienpartner» der Energy Star Night 2019?" : "Usgang.ch",
    "Auf welchem Weg kann man keine Energy Star Night Tickets gewinnen?" : "E-Mail",
    "Auf welcher Social Media Plattform kann man KEINE Energy Star Night Tickets gewinnen?" : "Twitter",
    "Wo findet die offizielle Aftershowparty der Energy Star Night statt?" : "Hiltl Club, Zürich",
    "Wie viele Kunden besuchen LIPO jährlich?" : "Über 1'000'000",
    "Was ist der Energy Music Award?" : "Ein Schweizer Musikpreis",
    "Die Energy Star Night ist…" : "das grösste Indoor Musik-Event der Schweiz",
    "Welche Ausgabe der Energy Star Night wurde zuletzt auf Pro7 Schweiz übertragen?" : "Energy Star Night 2017",
    "Wo erfährst du immer die neusten Infos rund um die Energy Star Night?" : "im Radio, auf der Event-Website und über Social Media",
    "Die wievielte Energy Star Night Ausgabe findet dieses Jahr statt?" : "Die siebzehnte",
    "In welcher Stadt eröffnete 1976 die erste LIPO Filiale der Schweiz?" : "Dietikon (Kanton Zürich)",
    "Wie lautet der offizielle Hashtag der Energy Star Night 2019?" : "#esn19",
    "In welchem Kanton gibt es KEINE LIPO Filiale?" : "Graubünden",
    "Was garantiert LIPO seinen Kunden?" : "Die tiefsten Preise der Schweiz",
    "Welche Farbe hat das LIPO Logo?" : "Orange",
    "Wie viele Energy Music Awards (in Zusammenarbeit mit dem Schweizerischen Roten Kreuz) wurden bisher verliehen?" : "3",
    "Wann wurde Energy Stars For Free in Energy Star Night umbenannt?":"Oktober 2016",
    "Der Energy Music Award wird jeweils in Zusammenarbeit mit ... verliehen?":"dem Schweizerischen Roten Kreuz",
    "Was kann man bei LIPO kaufen?":"Möbel",
    "Welcher Schweizer Act räumte den Energy Music Award 2018 ab?":"Nemo",
};


function makeAction() {
    if (mainDiv.getElementsByClassName('questions')[0]!=null){
        answerQuestion();
        nextQuestion();
    } else if(mainDiv.getElementsByClassName('cross')[0]!=null){
        mainDiv.getElementsByClassName('game-button-slot')[0].click();
    } else if(mainDiv.getElementsByClassName('slot')[0]!=null){
        if(document.getElementsByTagName('h1')[1].innerText=='Leider verloren'){
            mainDiv.getElementsByClassName('btn')[1].click();
        } else {
            mainDiv.getElementsByClassName('circle')[10].firstChild.click();
        }
    } else if(mainDiv.getElementsByClassName('lose')[0]!=null){
        mainDiv.getElementsByClassName('btn')[1].click();
    } else if(document.getElementById('verification')){
        document.getElementsByClassName('game-button')[0].click();
    } else if(mainDiv.getElementsByClassName('win')[0]!=null){
        alert('du hesch gwunne du Huso')
    }
}

function answerQuestion() {
    let curr = questions[mainDiv.getElementsByClassName('question-text')[0].innerHTML];
    let answer = document.getElementById(curr);
    answer.click();
}

function nextQuestion() {
    document.getElementById('next-question').click()
    setTimeout(makeAction,10000);
}


(function() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    setInterval(()=>{
        $(document).ready (function (){
            makeAction();
        });
    },20000);
})();
