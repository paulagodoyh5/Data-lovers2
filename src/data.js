/* Manejo de data */
window.data ={

result: (dataPokemon, condition) => {
    const grassy = dataPokemon.filter((x) => {
      return (x.type.includes(condition));
    }
    )
    return grassy;
  }
  
}

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



