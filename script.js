function Question(text,choice,answer){
    this.text=text;
    this.choice=choice;
    this.answer=answer;
}

function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.indexOfQuestion=0;
}
Quiz.prototype.getQuestion=function(){
    return this.questions[this.indexOfQuestion];
}
Quiz.prototype.isQuizFinished=function(){
    return this.questions.length===this.indexOfQuestion;
}
Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();

    if(question.isTrue(answer)){
        this.score++;
    }
    this.indexOfQuestion++;
}

var q1 = new Question('What is the capital city of France ?',['Paris','Nice','Marseille','Lyon'],'Paris');

var q2 = new Question('Which one of them is using for backend developing ?',['HTML5','CSS','Asp.net','Jquery'],'Asp.net');

var q3 = new Question('Which one of them is not a framework of a javascript ?',['React','SQL','Angular','Vue'],'SQL');

var questions=[q1,q2,q3];

Question.prototype.isTrue=function(answer){
    return this.answer===answer;
}
var quiz=new Quiz(questions);



loadQuestion();

function loadQuestion() {
    if(quiz.isQuizFinished()){
        showScore();
    }
    else{
        var question=quiz.getQuestion();
        var choices=question.choice;
        document.querySelector('#question').textContent=question.text;

        for(var i =0; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML=choices[i];
            guess('btn'+i,choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess) {
    var btn=document.getElementById(id);
    btn.onclick=function () {
        quiz.guess(guess);

        loadQuestion();
    }
}
function showScore() {
    var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML=html;
}

function showProgress() {
    var questionNumber=quiz.indexOfQuestion+1;
    document.querySelector('#progress').innerHTML='Question '+questionNumber+' of '+quiz.questions.length;
}






























