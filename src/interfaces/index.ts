interface Benefits {
  title: string;
  description: string;
}

export interface Lender {
  name: string;
  lendistry: string;
  location: string;
  fundedIn: string;
  fundMinimum: string;
  fundMaximum: string;
  about: {
    description: string;
    benefits: Benefits[];
  };
}
