// ==UserScript==
// @name         Energy Star Night 2019 Game Bot
// @description  Bot for Energy Star Night 2019
// @author       JaehaerysThe27th
// @match        *game.energy.ch/*
// @run-at       document-end
// ==/UserScript==

questions = {

}

function titleGet (title, selector = 'h1') {
	return document.getElementsByTagName(selector)[1].textContent === title
}

function questionNow () {
	if ($('h3.question-text').html() != null){
		return $('h3.question-text').html().toUpperCase()
	}
}

function nextQuestion () {
    $('button#next-question').trigger('click')
    setTimeout(makeAction, 200)
}

function answerQuestion () {
    let curr = currentQuestion()
    console.log(curr, questions[curr])
    $('#answers .answer-wrapper').each((i, el) => {
        if ($(el).children('label').html() === questions[curr]) {
            $(el).children('input').trigger('click')
        }
    })
    setTimeout(nextQuestion, 200) //speed
}

function makeAction () {
	if (document.getElementsByTagName('h1')[1] != null){
		if (titleIs('Hinter welchem Logo verstecken sich die Tickets?')) {
			console.log('STEP: Memory')
			var star = Math.floor(Math.random() * 12) + 2;
			document.getElementsByTagName('img') [star].click();
			setTimeout(makeAction, 1000)
		} else if (titleIs('Leider verloren')) {
			$('.lose button.game-button').trigger('click')
			setTimeout(makeAction, 200)
		}
	}
	else if ($('button#lose').length) {
			$('button#lose').trigger('click')
			console.clear()
			setTimeout(makeAction, 200)
	}
	else {
		answerQuestion()
	}

}

(function() {
    'use strict';

    console.log('starting...')
    makeAction()
})();
