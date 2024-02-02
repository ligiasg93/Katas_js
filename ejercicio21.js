const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
const mayores=[];
const menores=[];

for (let i = 0; i < users.length; i++) {
 const usuario=users[i]
  if (usuario.years <18){
    menores.push(usuario)
   

    ;}
    else {
      mayores.push(usuario);
    }
  }
  console.log("Usuarios menores de edad" , menores);
  console.log("Usuarios mayores de edad", mayores);
