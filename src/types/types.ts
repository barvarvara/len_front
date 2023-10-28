export type Tab = {
  id: string | number;
  label: string | number;
}

export type ClientType = {
  id: number;
  name: string;
  definition: string;
}

export type Client = {
  id: number;
  name: string;
  fcs: string;
  client_type: string | number;
  contacts: string | number;
  client_status: string | number;
}

export type ContactFilter = {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}

