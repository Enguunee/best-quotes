function generate(){
    var quotes = {
        '- Oscar Wilde': '“Be yourself; everyone else is already taken.”',
        '― Marilyn Monroe' : '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
        '― Albert Einstein' : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        '― Frank Zappa' : '“So many books, so little time.”',
        '― Marcus Tullius Cicero' : '“A room without books is like a body without a soul.”',
        '― Bernard M. Baruch' : '“Be who you are and say what you feel, because those who mind don not matter, and those who matter don not mind.”',
        '― Mae West' : '“You only live once, but if you do it right, once is enough.” ',
        '― Mahatma Gandhi' : '“Be the change that you wish to see in the world.”',
        '-Albert Camus' : `“Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”`,

    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}