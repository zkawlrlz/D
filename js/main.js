
const main = document.querySelector('main');
const loading = document.querySelector('aside');
const logo = document.querySelector('p img');


for(let i=0; i<240; i++){
  const imgNode = document.createElement('img');
  imgNode.setAttribute('src', `img/pic0 (${i}).jpg`);
  main.append(imgNode);
}

imageLoaded();


// mousemove event
window.addEventListener('mousemove', e=>{
  let x = e.pageX;
  let y = e.pageY;
  let cx = -x/10;
  let cy = -y/10;

  logo.style.transform = `translate(${cx}px, ${cy}px)`;

  let wid = window.innerWidth;
  let percent = parseInt((x/wid)*200);
  const imgs = document.querySelectorAll('main img');

  for(let img of imgs) img.style.display = 'none';
  imgs[percent].style.display = 'block';
})

// image load event
function imageLoaded(){
  const imgs = document.querySelectorAll('img');
  const len = imgs.length;
  let total = 0;
  let percent = 0;

// percent effect
imgs.forEach(img=>{
  img.addEventListener('load',()=>{
    total++
    percent = parseInt((total/len)*100);
    loading.innerText = `${percent}%`;

    // aside invisible
    if(total === 99){
      main.classList.add('on');
      loading.classList.add('off');

      setTimeout(()=>{
        loading.remove();
      },convertSpeed(loading))
    }
  })
})

}






// aside transition 속도값 변경값 함수
function convertSpeed(el){
  let speed = getComputedStyle(el).transitionDuration;
  speed = parseFloat(speed)*1000;
  return speed;
}


