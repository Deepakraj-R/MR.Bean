const balls = document.getElementsByClassName('ball');
document.onmousemove = (a)=>{
    const x= (a.clientX*80) / window.innerWidth + '%';
    const y= (a.clientY*80) / window.innerHeight + '%';


for(i=0;i<100;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-'+ x +',-'+ y +')';
}
};