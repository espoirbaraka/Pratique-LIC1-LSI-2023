function somme(){
    var champ1=document.getElementById("first_number").value;
    var champ2=document.getElementById("second_number").value;
    var nbre1 = parseInt(champ1);
    var nbre2 = parseInt(champ2);
    alert(nbre1+nbre2);
}

function afficherchamp(){
    var etat = document.getElementById("etat").value;
    if(etat=='marie'){
        document.getElementById("conj").style.display='block';
    }else{
        document.getElementById("conj").style.display='none';
    }
}