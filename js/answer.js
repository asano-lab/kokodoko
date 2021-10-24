/*=========================

show answer & hints
2021/10/20 by Kenta Asahi
MIT lic.

==========================*/

//DOM onload
document.addEventListener("DOMContentLoaded", function(){

    //answer
    /*
    =====Markdown CODE SAMPLE=====

    [答えを表示する](javascript:void(0)){: #ansbtn}
    >XX県YY市　ZZ市役所
    {: #answer}
    */
    const ansbtn = document.getElementById('ansbtn');
    if(ansbtn != null){
        ansbtn.addEventListener("click", function(){
            document.getElementById('answer').style.display = "block";
        });
    }

    
    //answer(new way)
    /*
    =====Markdown CODE SAMPLE=====
    
    - [答えを表示する](javascript:void(0)){: #ans}  
       - XX県YY市　ZZ市役所  ##### line including answer MUST BE indented!
    */
    const ans = document.getElementById('ans');
    if(ans != null){
        ans.addEventListener("click", function(){
            this.parentElement.getElementsByTagName("li")[0].style.display = "block";
        });
    }
    
    //hint(s)
    /*
    =====Markdown CODE SAMPLE=====
    
    - [ヒント](javascript:void(0)){: .hint}  
       - OO県です
    */
    const hints = document.getElementsByClassName('hint');
    for(let i = 0; i < hints.length; i++){
        hints[i].addEventListener("click", function(){
            this.parentElement.getElementsByTagName("li")[0].style.display = "block";
        });
    }

    // タイトルの取得
    const page_title = document.title;

    // 入力欄の作成
    let ans_input = document.getElementById('ans_input');
    let ans_hash;
    let judge_but;
    let judge;

    if (ans_input != null) {
        let cand = ans_input.parentElement.getElementsByTagName("li");
        ans_hash = [];
        // 自分自身を除く
        for (let i = 1; i < cand.length; i++) {
            ans_hash.push(cand[i].innerHTML);
        }
        console.log(ans_hash);
        ans_input.parentElement.outerHTML = "<label>解答入力欄 <input type=\"text\" id=\"ans_input\"></label><button id=\"judge_but\">判定</button><p id=\"judge\"></p>";
        
        ans_input = document.getElementById('ans_input');
        judge_but = document.getElementById('judge_but');
        judge = document.getElementById('judge');

        judge_but.addEventListener("click", () => {
            const sha_obj = new jsSHA("SHA-256", "TEXT");
            sha_obj.update(page_title + ans_input.value);
            if (ans_hash.includes(sha_obj.getHash("HEX"))) {
                judge.innerHTML = "正解";
            } else {
                judge.innerHTML = "不正解";
            }
        });
    }
});
