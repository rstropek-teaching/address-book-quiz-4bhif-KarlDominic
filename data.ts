export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export const persons: IPerson[] = [
    {id: 1, firstName: 'Dominic', lastName: 'Karl', email: 'dominic.karl@js.at'}
  ];