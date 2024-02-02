const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (const datos in alien) {
  if (Object.hasOwnProperty.call(alien, datos)) {
    const element = alien[datos];
    console.log(element);
  }
}
