/* tslint:disable */
/* eslint-disable */
import { Conges } from './conges';
import { Departement } from './departement';
import { GrantedAuthority } from './granted-authority';
import { Horaire } from './horaire';
import { Performance } from './performance';
import { Taches } from './taches';
export interface User {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: Array<GrantedAuthority>;
  cin: string;
  cnss: string;
  congesList: Array<Conges>;
  contrat: 'CDI' | 'CDD' | 'FREELANCE';
  credentialsNonExpired: boolean;
  dateNsc: string;
  dateRecrutement: string;
  departement: Departement;
  email: string;
  enabled: boolean;
  fonction: 'Chef' | 'Ingenieur' | 'Technicien';
  horaireList: Array<Horaire>;
  name: string;
  nom: string;
  password: string;
  performanceListe: Array<Performance>;
  photo: string;
  prenom: string;
  role: 'RH' | 'EMPLOYE' | 'ADMIN';
  salaire: number;
  tachesList: Array<Taches>;
  telephone: number;
  username: string;
}
