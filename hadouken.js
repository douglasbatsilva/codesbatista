const families = [
  {
    name: "Silva",
    city: "Rio de Janeiro",
    members: [
      {
        name: "Pedro",
        age: 45,
        height: "1.75m",
        weight: "80kg",
        vehicles: [
          {
            brand: "Ford",
            model: "Fiesta",
            year: "2010",
          },
        ],
      },
      {
        name: "Maria",
        age: 29,
        height: "1.65m",
        weight: "60kg",
        vehicles: [
          {
            brand: "Ford",
            model: "Fiesta",
            year: "2010",
          },
        ],
      },
    ],
  },
  {
    name: "Ferreira",
    city: "São Paulo",
    members: [
      {
        name: "Júlio",
        age: 62,
        height: "1.70m",
        weight: "90kg",
        vehicles: [
          {
            brand: "Fiat",
            model: "Siena",
            year: "2016",
          },
          {
            brand: "Fiat",
            model: "Toro",
            year: "2018",
          },
        ],
      },
      {
        name: "Eduarda",
        age: 65,
        height: "1.60m",
        weight: "55kg",
        vehicles: [
          {
            brand: "Fiat",
            model: "Siena",
            year: "2016",
          },
          {
            brand: "Honda",
            model: "Civic",
            year: "2020",
          },
        ],
      },
    ],
  },
];

// Código Hadouken Gigantesco

// families.forEach((family) => {
//   if (family.name === "Ferreira" && family.city === "São Paulo") {
//     const members = family.members;
//     members.forEach((member) => {
//       if (member.age > 64 && member.vehicles.length > 1) {
//         const vehicles = member.vehicles;
//         vehicles.forEach((vehicle) => {
//           if (vehicle.brand === "Fiat" && vehicle.model === "Siena") {
//             console.log(
//               `${member.name} is driving a ${vehicle.brand} ${vehicle.model}`
//             );
//           }
//         });
//       }
//     });
//   }
// });



// Código Separado por métodos

function searchASpecificMember(families){
  return families.forEach((family) => {
    if (family.name === "Ferreira" && family.city === "São Paulo") {
      searchWithinEachMember(family.members);
    }
  });
}

function searchWithinEachMember(members){
  return members.forEach((member) => {
    if (member.age > 64 && member.vehicles.length > 1) {
      searchWithinEachVehicle(member);
    }
  });
}

function searchWithinEachVehicle(member){
  const { vehicles } = member;
  return vehicles.forEach((vehicle) => {
    if (vehicle.brand === "Fiat" && vehicle.model === "Siena") {
      console.log(
        `${member.name} is driving a ${vehicle.brand} ${vehicle.model}`
      );
    }
  });
}

searchASpecificMember(families);