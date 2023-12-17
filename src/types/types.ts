import React from 'react';

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
  client_status: ClientStatus;
}

export type ClientsContact = {
  fcs: string;
  phone: string;
}

export type Contact = {
  id: number;
  fcs: string;
  phone: string;
  birthday: string;
  ban_on_spam: boolean;
}

export type ContactFilter = {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}

export type User = {
  username: string,
  email: string,
  phone: string,
  is_staff: boolean,
}

