// deliveryData.ts
export interface Delivery {
    status: string;
    id: string;
    created_by: string;
    last_msg: string;
    livreur: string;
    last_msg_date: string;
}

export const deliveryData: Delivery[] = [
    { status: 'created', id: '1', created_by: 'Arianna', last_msg: 'Prévue le 21/07/2024', livreur: 'Arianna',last_msg_date: '2024-07-21' },
    { status: 'signed', id: '2', created_by: 'Art', last_msg: 'Bon de commande', livreur: '' ,last_msg_date: '2024-06-21'},
    { status: 'payed', id: '3', created_by: '', last_msg: 'Choisissez un.e freelance pour continuer', livreur: '',last_msg_date: '2024-08-21' },
    { status: 'selected_livreur', id: '4', created_by: 'Arianna', last_msg: 'Prévue le 21/07/2024', livreur: 'Arianna',last_msg_date: '2024-03-21' },
    { status: 'accepted', id: '5', created_by: '', last_msg: 'Prestation de service', livreur: '',last_msg_date: '2024-07-13' },
    { status: 'problem', id: '6', created_by: '', last_msg: 'Le/La freelance ne trouve pas l’adresse', livreur: '' ,last_msg_date: '2024-07-27'},
    { status: 'done', id: '7', created_by: '', last_msg: 'Preuve de livraison en cours', livreur: '',last_msg_date: '2024-07-11' },
];
