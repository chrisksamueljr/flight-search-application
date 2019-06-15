// /**
//  * Search Results interface
//  *
//  */
// export interface SearchResultsType {
//     /** the Search Results Type shares an array of flight type of flights */
//       // SearchResult: {
//       /** the Search Results Type shares an array of flight type of flights */
//           Flight: Flight[];
//       };
//   // }
  
//   /** Flight Interface */
//   interface Flight {
//     /** Flight Interface */
//       FlightLeg: FlightLeg[];
//   }
  
//   /** FlightLeg Interface */
//   interface FlightLeg {
  
//      /**  {string} <FlightLeg property> */
//       flightNumber: string;
//        /**  {string} <FlightLeg property> */
//       flightDate: string;
//        /**  {string} <FlightLeg property> */
//       STD: string;
//        /**  {string} <FlightLeg property> */
//       ETD: string;
//        /**  {string} <FlightLeg property> */
//       ATD: string;
//        /**  {string} <FlightLeg property> */
//       currentDepTime: string;
//        /**  {string} <FlightLeg property> */
//       depDescription: string;
//        /**  {string} <FlightLeg property> */
//       STA: string;
//        /**  {string} <FlightLeg property> */
//       ETA: string;
//        /**  {string} <FlightLeg property> */
//       ATA: string;
//        /**  {string} <FlightLeg property> */
//       currentArrTime: string;
//        /**  {string} <FlightLeg property> */
//       arrDescription: string;
//        /**  {string} <FlightLeg property> */
//       schDuration: string;
//        /**  {string} <FlightLeg property> */
//       originCode: string;
//        /**  {string} <FlightLeg property> */
//       originCity: string;
//     /**  {boolean} <FlightLeg property> */
//        showSubText: boolean;
//     /**  {string} <FlightLeg property> */
//       destinationCode: string;
//        /**  {string} <FlightLeg property> */
//       destinationCity: string;
//        /**  {string} <FlightLeg property> */
//       destinationSubText: string;
//        /**  {string} <FlightLeg property> */
//       eqpmtType: string;
//        /**  {string} <FlightLeg property> */
//       tailNumber: string;
//        /**  {string} <FlightLeg property> */
//       depTerminal: string;
//        /**  {string} <FlightLeg property> */
//       arrTerminal: string;
//        /**  {string} <FlightLeg property> */
//       flightStatus: string;
  
//   }
  
//   /**
//    *
//    *  Exported Function: createDefaultSearchResultsState()
//    *
//    * @returns {SearchResultsType} newSearchResultsType
//    */
//   export function createDefaultSearchResultsState(): SearchResultsType {
//     const newSearchResultsType: SearchResultsType = {
//       SearchResult: {
//           Flight: []
//       }
//     };
//     return newSearchResultsType;
//   }