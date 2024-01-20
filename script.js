//Multiply data-info without html which is much easier!

let data = [
    
    {
        name: 'Ruby',
        age: '28'
    },
    {
        name: 'Joey',
        age: '30'
    },
    {
        name: 'Jason',
        age: '34'
    },
    {
        name: 'Freya',
        age: '27'
    },
    {
        name: 'Sam',
        age: '32'
    },
    {
        name: 'Mia',
        age: '25'
    }
];

//we can map this in js rather than write all the persons details
const info = document.querySelector('#info');

//shows the names
//inserted new info => 'is', age, 'years old'
let details = data.map(function(item) { 
    return '<div>' + item.name + ' ' + 'is ' + item.age +
     ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');

