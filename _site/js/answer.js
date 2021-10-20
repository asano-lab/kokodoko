/*

show answer
2021/10/20 by Kenta Asahi
MIT lic.

*/

document.addEventListener("DOMContentLoaded", function(){
    //answer (legacy)
    const ans = document.getElementById('ansbtn');
    if(ans != null){
        ans.addEventListener("click", function(){
            document.getElementById('answer').style.display = "block";
        });
    }
    
    //answer
    document.getElementById('ans').addEventListener("click", function(){
        this.parentElement.getElementsByTagName("li")[0].style.display = "block";
    });


    //hint(s)
    const hints = document.getElementsByClassName('hint');
    for(let i = 0; i < hints.length; i++){
        hints[i].addEventListener("click", function(){
            this.parentElement.getElementsByTagName("li")[0].style.display = "block";
        });
    }
});
