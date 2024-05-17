/* tslint:disable */
/* eslint-disable */
export interface Conges {
  dateDebut?: string;
  dateDemande?: string;
  dateFin?: string;
  etat?: 'Accepter' | 'EnCours' | 'Refuser';
  id?: number;
  periode?: number;
  type?: 'Maladis' | 'Voiyage' | 'Empechements';
}
