/* tslint:disable */
/* eslint-disable */
export interface UserRequest {
  cin?: string;
  cnss?: string;
  contrat?: 'CDI' | 'CDD' | 'FREELANCE';
  dateNsc?: string;
  dateRecrutement?: string;
  departement?: string;
  email?: string;
  fonction?: 'Chef' | 'Ingenieur' | 'Technicien';
  nom?: string;
  password?: string;
  photo?: string;
  prenom?: string;
  role?: 'RH' | 'EMPLOYE' | 'ADMIN';
  salaire?: number;
  telephone?: number;
}
