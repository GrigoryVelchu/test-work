export default (text)=>{
  const months = new Map([
    ['янв',0],
    ['фев',1],
    ['мар',2],
    ['апр',3],
    ['май',4],
    ['июн',5],
    ['июл',6],
    ['авг',7],
    ['сен',8],
    ['окт',9],
    ['ноя',10],
    ['дек',11],
  ])
    const splitedText = text.split(' ');
    let month = '';
    months.forEach((val,key)=>{
      if(splitedText[1] === key){
        month = val
      }
    })
    splitedText.splice(1,1, month)
    let [year, thisMonth, day] = splitedText.reverse().map(el=>parseInt(el))
    return new Date (year, thisMonth, day)
}
