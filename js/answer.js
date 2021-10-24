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

    // 入力欄の作成
    const ans_input = document.getElementById('ans_input');
    if (ans_input != null) {
        ans_input.outerHTML = "<label>解答入力欄 <input type=\"text\" id=\"ans_col\"></label>";
    }

    const page_title = document.title;
    const ans_col = document.getElementById('ans_col');
    let judge_but = document.getElementById('judge_but');
    let judge_out;
    let judge;
    let ans_hash;

    if (judge_but != null && ans_col != null) {
        judge = judge_but.parentElement.getElementsByTagName("li");
        ans_hash = [];
        // 解答の配列を作成
        for (let i = 0; i < judge.length; i++) {
            ans_hash.push(judge[i].innerHTML);
        }

        // 強引にボタンに置換
        judge_but.outerHTML = "<button id=\"judge_but\">判定</button><p id=\"judge_out\"></p>";
        judge_but = document.getElementById('judge_but');
        judge_out = document.getElementById('judge_out');
        console.log(judge_out);

        judge_but.addEventListener("click", () => {
            const sha_obj = new jsSHA("SHA-256", "TEXT");
            sha_obj.update(page_title + ans_col.value);
            if (ans_hash.includes(sha_obj.getHash("HEX"))) {
                judge_out.innerHTML = "正解";
            } else {
                judge_out.innerHTML = "不正解";
            }
        });
    }
});
