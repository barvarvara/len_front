export type Tab = {
  id: string | number;
  label: string | number;
}

export type ClientType = {
  id: number;
  name: string;
  definition: string;
}

export type ClientStatus = {
  id: number;
  name: string;
  definition: string;
}

export type Client = {
  id: number;
  name: string;
  fcs: string | null;
  client_type: ClientType;
  contacts: string | number;
  client_status: ClientStatus;
}

export type ContactFilter = {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}

