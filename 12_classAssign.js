console.log(`========================== Details of Vehicle========================== `);

class Vehicle {
    constructor ( make,model,year,color,fuel_type){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color;
        this.fuel_type=fuel_type;


    }
    details(){
        
        console.log(`Vehicle Details:`);
        console.log(`Name:${this.make}`);
        console.log(`Location: ${this.model}`);
        console.log(`Location: ${this.year}`);
        console.log(`Year: ${this.color}`);
        console.log(`Courses:  ${this.fuel_type}`);
        
    }
}

const MarutiSuzuki = new Vehicle("Maruti Suzuki", "Swift", 2022, "Red", "Petrol");
MarutiSuzuki.details();

const Hyundai = new Vehicle("Hyundai", "Creta", 2021, "White", "Diesel");
Hyundai.details();

const Tata = new Vehicle("Tata", "Nexon", 2023, "Blue", "Petrol");
Tata.details();

const Kia = new Vehicle("Kia", "Seltos", 2020, "Black", "Diesel");
Kia.details();

const Honda = new Vehicle("Honda", "City", 2022, "Silver", "Petrol")
Honda.details();


console.log(`========================== Details of College========================== `);


class College{
    constructor (name,location,establishment_year,courses_offered){
       this.name=name;
       this.location=location
       this.establishment_year=establishment_year;
       this.courses_offered=courses_offered;

    }
    display(){
        console.log(`College Details:`);
        console.log(`Name:${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Year: ${this.establishment_year}`);
        console.log(`Courses:  ${this.courses_offered}`);
        
    }
}

 const IIT = new College ("Indian Institute of Technology (IIT) Bombay", "Maharashtra", 1958, "Computer Science and Engineering",);
 IIT.display();

 const IISc = new College ("Indian Institute of Science (IISc) Bangalore", "Bangalore, Karnataka", 1909, "Aerospace Engineering");
 IISc.display();

 const Stephen = new College ("St. Stephen's College", "New Delhi", 1881, "Economics");
 Stephen.display();

 const NIT = new College ("National Institute of Technology (NIT) Trichy", "Tamil Nadu", 1964, "Electronics and Communication Engineering");
 NIT.display();