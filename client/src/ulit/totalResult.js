export const totalResult=(num)=>{
    return  Number((num/6).toFixed(2)).toLocaleString() + " ";
}

export const GpaName=(num)=>{

   if(num<33)
     return "F"
     if(num>=33 &&num<40)
     return "D"
     if(num>=40 &&num<50)
     return "C"
     if(num>=50 &&num<60)
     return "B"
     if(num>=60 &&num<70)
     return "A-"
     if(num>=70 &&num<80)
     return "A"
     if(num>=80 &&num<101)
     return "A+"
}