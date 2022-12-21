let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"If you must break the law, do it to seize power. In all other cases observe it"',
    person: 'Julius Caesar'
},
{
    quote: '"I found Rome acity of bricks, and left it a city of marble"',
    person: 'Augustus'
},
{
    quote: '"Waste no more time arguing about what a good man should be. Be one."',
    person: 'Marcus Aurelius'
},
{
    quote: '"If you have a garden and a library, you have all that you need."',
    person: 'Marcus Tullius Cicero'
},
{
    quote: '"No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strenght of which his body is capable."',
    person: 'Socrates'
},
{
    quote: '"Brave men rejoice in adversity, just as brave soldiers triumph in war."',
    person: 'Lucius Annaeus Seneca'
},
{
    quote: '"It is easier to find men who will to volunteer to die, than to find those who are willing to endure pain with patience."',
    person: 'Julius Caesar'
},
];

for(let i=0; i<quotes.length; i++){
    console.log(quotes[i]);
}

//acess the properties of the quotes array by choosing a random number
//which corresponds to an index
btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random])

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})