export default function myTime(sT, eT){

    let startTime= sT
    let endTime= eT
    let timeEnd= endTime.split(':') //20:00 ['20', '00']

    let timeM=startTime.split(':')// 8:00 ['08','00']    
    let x=Number(timeM[0])+Number(timeM[1])/60//0.13333.....
    
    let y= Number(timeEnd[0])+ Number(timeEnd[1])/60 //
    
    let currentHr = x
    
    let next= currentHr
    let numberHour=[]
    let duration=parseFloat((1/60).toFixed(2))
   
    do {
        currentHr =next + duration
        
        numberHour.push(next)
        next=currentHr
    } 
    while (next < y);
     
    let hours= numberHour.map(el =>{
        let hrStart=el.toString().split('.')[0]
        var hourStart = hrStart;
        hourStart = (hourStart < 10)? '0' + hourStart : hourStart;
        var minStart = Math.round((el-Number(hrStart))*60)
        
        
        let rStart= minStart.toString().split('')
        
        if(rStart.length===1 && Number(rStart[0]) < 10){
               
            rStart[0]= '0'
            rStart=[rStart[0]]
            
    
               minStart='00'
           }
    
          if(rStart[1]!=='0' && rStart[1]<'5'){
            
              
              rStart[1]= '0'
              rStart=[rStart[0], rStart[1]]
            
            minStart= rStart.join('')   
        }
    
        if(rStart[1]!=='0' && rStart[1]>'5'){
            
              
            rStart[1]= '0'
            let x = rStart[0]
            rStart[0]= Number(x) + 1
            rStart=[rStart[0], rStart[1]]
          
          minStart= rStart.join('')   
      }
    
    
        let minuteStart = minStart
        if(minuteStart==='60'){
            minuteStart ='00'
            let h = Number(hourStart)+1
            hourStart = h.toString()
        }
        
       
        let finallyhour= hourStart + ':' + minuteStart
       
        return finallyhour
    })

    return hours
}

