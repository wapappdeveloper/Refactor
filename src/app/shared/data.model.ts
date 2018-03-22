/*
"id": "3",
"name": "name3",
"surname": "surname3",
"birthDate": "05-5-1978",
"phone": "812312312",
"city": "Wroclaw",
"street": "Himalajska"
*/
export class DataModel{
    public id:string;
    public name:string;
    public surname:string;
    public birthDate:string;
    public phone:string;
    public city:string;
    public street:string;
    public number:string;

    constructor(id:string, name:string, surname:string, birthDate:string, phone:string, city:string, street:string, number:string){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.phone = phone;
        this.city = city;
        this.street = street;
        this.number = number;
        return {
            id:this.id,
            name:this.name,
            surname:this.surname,
            birthDate:this.birthDate,
            phone:this.phone,
            city:this.city,
            street:this.city,
            number:this.number
        }
    }
}