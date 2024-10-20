export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: boolean;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
  companyName: string;
}

export interface UserForm {
  name: string;
  email: string;
  website: boolean;
  companyName: string;
}
