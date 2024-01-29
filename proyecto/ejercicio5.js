function createHistoricalRelationship(ReinaVictoria, PrincipeAlberto) {
    ReinaVictoria.bestFriend = PrincipeAlberto;
    PrincipeAlberto.bestFriend = ReinaVictoria;
  
    return {
      person1: ReinaVictoria,
      person2: PrincipeAlberto,
    };
  }
  
  let historicalCouple = createHistoricalRelationship(
    { name: "ReinaVictoria" },
    { name: "PrincipeAlberto" }
  );
  
  // Imprimir el nombre de la Reina Victoria
  console.log(historicalCouple.person1.name);
  
  // Simulación de la muerte de PrincipeAlberto
  delete historicalCouple.person2.bestFriend;
  
  // Imprimir el valor de bestFriend del Principe Alberto
  console.log(historicalCouple.person2.bestFriend); // Esto podría dar un error si person2.bestFriend es undefined
  
  // Acceder a ReinaVictoria después de la eliminación del mejor amigo de PrincipeAlberto
  console.log(historicalCouple.person1.bestFriend ? historicalCouple.person1.bestFriend.name : "Sin mejor amigo");
  