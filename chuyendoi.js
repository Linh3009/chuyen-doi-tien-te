function Convert(){
    let Amount=parseInt(document.getElementById('Amount').value)
    let From= parseInt(document.getElementById('From').value)
    let To=parseInt(document.getElementById('To').value)
    let result = Amount*(From/To)
    document.getElementById('result').innerHTML=result
}