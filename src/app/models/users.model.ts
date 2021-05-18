export interface Users{
    id:number,
    email:string,
    name:string,
    profilePic:string,
    address:{
        street:string;
        suite:string;
        city:number;
        zipcode:string;
    };
    profession:string,
    mobileno:string;
}