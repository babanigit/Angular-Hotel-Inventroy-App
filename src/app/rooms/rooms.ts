export interface IRoom{
    totalRooms?:number;
    availableRooms?:number;
    bookedRooms?:number;
}

export interface IRooms {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}

// export class RoomsDTO {
//     roomNumber?: number;
//     roomType: string;
//     amenities: string;
//     price: number;
//     photos: string;
//     checkinTime: Date;
//     checkoutTime: Date;
//     rating: number;
// }