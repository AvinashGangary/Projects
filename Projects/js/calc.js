function addlevel(val)
{
  
    let num=document.getElementById('res').value ;
    
    document.getElementById('res').value=num+val;
    
}
function result()
{
    let num=document.getElementById('res').value ;
    document.getElementById('res').value=eval(num);

}