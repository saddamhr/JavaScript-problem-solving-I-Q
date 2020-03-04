var speech = "I am a  good person. I don't snore at night";

var cnt = 0;
for(var i = 0; i < speech.length; i++) {
    if(speech[i] == " " && speech[i-1] != ' '){
        cnt++;
    }
}
console.log(cnt + 1);