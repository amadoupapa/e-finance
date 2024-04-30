import { Utilisateur } from "./models/user.model";

export const fakeUsers: Utilisateur[] = [
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      motDePasse: 'john123',
    },
    {
      id: 2,
      nom: "Smith",
      prenom: "Jane",
      email: "jane.smith@example.com",
      motDePasse: "jane456"
  },
  {
      id: 3,
      nom: "Garcia",
      prenom: "Maria",
      email: "maria.garcia@example.com",
      motDePasse: "maria789"
  },
  {
      id: 4,
      nom: "Kim",
      prenom: "Jin",
      email: "jin.kim@example.com",
      motDePasse: "jin012"
  },
  {
      id: 5,
      nom: "Müller",
      prenom: "Hans",
      email: "hans.muller@example.com",
      motDePasse: "hans345"
  }
  ];