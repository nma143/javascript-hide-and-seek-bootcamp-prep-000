function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  var nest=document.getElementById("nested")
  return nest.querySelector('.target')
  //.querySelector('ul.target)
}
function increaseRankBy(n){
  var lis=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i=0; i<lis.length; i++)
  {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
  }

}

function deepestChild()
{
  var lis=document.getElementById('app').querySelectorAll('div#grand-node')
  var next=[]
  while(lis.length>0)
    {
      next=lis[0].querySelectorAll('div')
      if(next.length>0)
        {

          lis=next
        }
      else
        {
          break
        }
    }
  return lis[0]
}
