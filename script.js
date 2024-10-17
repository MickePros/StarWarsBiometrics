document.querySelector("#search").addEventListener('click', () => {
    let text = document.querySelector("#input").value;
    if (text != '')
        getApi(text);
});

function getApi(name){
    let fullUri = 'https://swapi.tech/api/people/?name=' + name;
    fetch(fullUri) 
    .then(res => res.json()) 
    .then(data => 
    { 
        let person = data.result[0].properties;
        document.querySelector("#result").innerHTML = `Height: ${person.height}\nMass: ${person.mass}\nGender: ${person.gender}\nHair: ${person.hair_color}\nEyes: ${person.eye_color}`;
        console.log(person);
    }) 
    .catch(err => console.log(err)) 
}