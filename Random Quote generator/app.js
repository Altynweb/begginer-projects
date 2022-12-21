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
{
    quote: '"Impossible is word to be found only in the dictionary of fools."',
    person: 'Napoleon Bonaparte'
},
{
    quote: '"Until you spread your wings, you will have no idea how far you can fly."',
    person: 'Napoleon Bonaparte'
},
{
    quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    person: 'Winston S. Churchill'
},
{
    quote: '"We must dare to be great; and we must realize that greatness is the fruit of toil, sacrifice and high courage."',
    person: 'Theodore Roosevelt'
},
{
    quote: '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    person: 'Christopher Colombus'
},
{
    quote: '"It is foolish to mourn the men who died. Rather we should thank god that such men lived."',
    person: 'George Patton'
},
{
    quote: '"Sweat saves blood."',
    person: 'Erwin Rommel'
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
