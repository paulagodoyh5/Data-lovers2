//Se hace global la data en pokemon.js
const dataPokemon = window.POKEMON.pokemon; 

//MOSTRAR PERSONAJES

//Recorrer data para imprimir personajes
for (let i = 0; i < dataPokemon.length ; i++) {
   
//crear div contenedor HTML dinámico 
    const pokeContainer = document.createElement("section");
//Se le asigna un id y clase
    pokeContainer.id = "pokeContain";
    pokeContainer.className = "pokeContain";

//Se crea h4 para imprimir nombre, ya que es un texto se utiliza textContent
    const pokeName = document.createElement("h4");
// y se indica que es lo que tiene que mostrar de la data
    pokeName.textContent = dataPokemon[i].name;

    const pokeNum = document.createElement("p");
    pokeNum.textContent = dataPokemon[i].num;

    const pokeEgg = document.createElement("p");
    pokeEgg.textContent = dataPokemon[i].egg;

    const pokeWeaknesses = document.createElement("p");
    pokeWeaknesses.textContent = dataPokemon[i].weaknesses;

 
//Se crea img para imprimir imagen, ya que es una imagen se utiliza src
    const pokeImage = document.createElement("img");
    pokeImage.className = "pokeImg";
    pokeImage.src = dataPokemon[i].img;

//Se le da un padre a todos los elementos creados para imprimirlos
pokeContainer.appendChild(pokeImage);    
pokeContainer.appendChild(pokeName);
    pokeContainer.appendChild(pokeNum);
    pokeContainer.appendChild(pokeEgg);
    pokeContainer.appendChild(pokeWeaknesses);
    

//Se imprime en el container del HTML
document.getElementById("container").appendChild(pokeContainer).innerHTML;    

};

//FILTRAR

//se hace una constante que traiga el filterSelect general
const filterX = document.getElementById("filterSelect");
filterX.addEventListener("change", () => {

//Variable con valor de select
    let condition = filterX.value;
        
    document.getElementById("container").innerHTML=""
        
const result = window.data.result(dataPokemon, condition);
  
     for (let j=0; j< result.length; j++) {
            //crear div contenedor HTML dinámico 
    const pokeContainer = document.createElement("div");
    //Se le asigna un id y clase
        pokeContainer.id = "pokeContain";
        pokeContainer.className = "pokeContain";
    
    //Se crea h4 para imprimir nombre, ya que es un texto se utiliza textContent
        const pokeName = document.createElement("h4");
    // y se indica que es lo que tiene que mostrar de la data
        pokeName.textContent = result[j].name;
    
        const pokeNum = document.createElement("p");
        pokeNum.textContent = result[j].num;
    
        const pokeEgg = document.createElement("p");
        pokeEgg.textContent = result[j].egg;
    
        const pokeWeaknesses = document.createElement("p");
        pokeWeaknesses.textContent = result[j].weaknesses;
    
        const pokeImage = document.createElement("img");
        pokeImage.className = "pokeImg";
        pokeImage.src = result[j].img;
        
        pokeContainer.appendChild(pokeImage);
        pokeContainer.appendChild(pokeName);
        pokeContainer.appendChild(pokeNum);
        pokeContainer.appendChild(pokeEgg);
        pokeContainer.appendChild(pokeWeaknesses);
        document.getElementById("container").appendChild(pokeContainer).innerHTML;
        
        }

        return result;
    });


   /* document.getElementById("list").innerHTML="";
  let result = window.filterStatus(data,selectValue);
  console.log(result);

  for(let i=0; i<result.length;i++) {*/
    
