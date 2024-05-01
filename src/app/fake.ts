import { Utilisateur } from "./models/user.model";

export const fakeUsers: Utilisateur[] = [
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      motDePasse: 'john123',
      statut:"actif"
    },
    {
      id: 2,
      nom: "Smith",
      prenom: "Jane",
      email: "jane.smith@example.com",
      motDePasse: "jane456",
      statut:"actif"
  },
  {
      id: 3,
      nom: "Garcia",
      prenom: "Maria",
      email: "maria.garcia@example.com",
      motDePasse: "maria789",
      statut:"actif"
  },
  {
      id: 4,
      nom: "Kim",
      prenom: "Jin",
      email: "jin.kim@example.com",
      motDePasse: "jin012",
      statut:"actif"
  },
  {
      id: 5,
      nom: "Müller",
      prenom: "Hans",
      email: "hans.muller@example.com",
      motDePasse: "hans345",
      statut:"actif"
  }
  ];