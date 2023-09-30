class Calculate{

    area(x,y){
        if(typeof y === 'undefined')
            return x*x;
        else
            return x*y;
    }
}


const cal=new Calculate();
console.log("Square of Area: ",cal.area(23));
console.log("Rectangle of Area: ",cal.area(12,23));