/* tslint:disable */
/* eslint-disable */
export interface CongeRequest {
  dateDebut?: string;
  dateDemande?: string;
  dateFin?: string;
  employes?: string;
  etat?: 'Accepter' | 'EnCours' | 'Refuser';
  id?: number;
  periode?: number;
  type?: 'Maladis' | 'Voiyage' | 'Empechements';
}
