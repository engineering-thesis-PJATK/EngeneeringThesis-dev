// export interface CompanyAddress {
//   adrTown: string;
//   adrStreet: string;
//   adrStreetNumber: string;
//   adrPostCode: string;
//   adrCountry: string;
// }


/*
{
  "adrTown": "string",
  "adrStreet": "string",
  "adrStreetNumber": "string",
  "adrPostCode": "string",
  "adrCountry": "string"
}
*/

export interface CompanyAddress {
  adrId: number;
  adrTown: string;
  adrStreet: string;
  adrStreetNumber: string;
  adrPostCode: string;
  adrCountry: string;
  adrIdCompany: number;
  adrIdCompanyNavigation?: any;
}