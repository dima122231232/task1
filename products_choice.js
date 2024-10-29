const materialWood = document.querySelector('.material_wood');
const hiddenDiv = document.querySelector('.hidden-div');
let isOpen = false;

materialWood.addEventListener('click', () => {
    gsap.to(".arrow_wood", { rotate: (isOpen = !isOpen) ? "90deg" : "0deg" });
    gsap.to(hiddenDiv, {
        height: isOpen ? 'auto' : '0px',
        duration: 0.5,
        ease: 'power2.inOut'
    });
});

const materialseat = document.querySelector('.material_seat');
const hiddenDiv2 = document.querySelector('.hidden-div2');
let isOpen2 = false;

materialseat.addEventListener('click', () => {
    gsap.to(".arrow_seat", { rotate: (isOpen2 = !isOpen2) ? "90deg" : "0deg" });
    gsap.to(hiddenDiv2, {
        height: isOpen2 ? 'auto' : '0px',
        duration: 0.5,
        ease: 'power2.inOut'
    });
});

const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const buyNumber = document.querySelector('.buy_number');

const minVal = 0;
const maxVal = 99;
let holdInterval;


function updateNumber(change) {
    let currentVal = parseInt(buyNumber.value) || 0;
    let newVal = currentVal + change;

    if (newVal >= minVal && newVal <= maxVal) {
        gsap.to(buyNumber, {
            value: newVal,
            duration: 0.2,
            ease: "power2.out",
            onUpdate: () => buyNumber.value = Math.round(buyNumber.value) // Округляем до целого
        });
    }
}

minusBtn.addEventListener('mousedown', () => {
    updateNumber(-1);
    holdInterval = setInterval(() => updateNumber(-1), 200);
});
plusBtn.addEventListener('mousedown', () => {
    updateNumber(1);
    holdInterval = setInterval(() => updateNumber(1), 200);
});

document.addEventListener('mouseup', () => clearInterval(holdInterval));

buyNumber.addEventListener('input', () => {
    let currentVal = parseInt(buyNumber.value);
    if (isNaN(currentVal) || currentVal < minVal) {
        buyNumber.value = minVal;
    } else if (currentVal > maxVal) {
        buyNumber.value = maxVal;
    }
});


const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    allowTouchMove: true,
  });

  const materialImages = document.querySelectorAll('.img__material-div .img__material-img');
  const hiddenDivs = document.querySelectorAll('.hidden-div > div');
  
  hiddenDivs.forEach((div, index) => {
      div.addEventListener('mouseenter', () => {
          if (materialImages[index]) {
              gsap.to(materialImages[index], { opacity: 1, duration: 0 });
          }
      });
  
      div.addEventListener('mouseleave', () => {
          if (materialImages[index]) {
              gsap.to(materialImages[index], { opacity: 0, duration: 0.2 });
          }
      });
  });

  document.querySelectorAll('.hidden-div > div').forEach((div) => {
    div.addEventListener('click', function () {
        const activeDiv = document.querySelector('.hidden-div > div.active');
        if (activeDiv) {
            activeDiv.style.backgroundColor = '#fff';
            activeDiv.querySelector('.gal').style.opacity = '0';
            activeDiv.classList.remove('active');
        }

        this.style.backgroundColor = '#f0f0f0';
        this.querySelector('.gal').style.opacity = '1';
        this.classList.add('active');
    });
});


const materialImages2 = document.querySelectorAll('.img__material-div_seat .img__material_seat-img');
  const hiddenDivs2 = document.querySelectorAll('.hidden-div2 > div');
  
  hiddenDivs2.forEach((div, index) => {
      div.addEventListener('mouseenter', () => {
          if (materialImages2[index]) {
              gsap.to(materialImages2[index], { opacity: 1, duration: 0 });
          }
      });
  
      div.addEventListener('mouseleave', () => {
          if (materialImages2[index]) {
              gsap.to(materialImages2[index], { opacity: 0, duration: 0.2 });
          }
      });
  });

  document.querySelectorAll('.hidden-div2 > div').forEach((div) => {
    div.addEventListener('click', function () {
        const activeDiv2 = document.querySelector('.hidden-div2 > div.active');
        if (activeDiv2) {
            activeDiv2.style.backgroundColor = '#fff';
            activeDiv2.querySelector('.gal2').style.opacity = '0';
            activeDiv2.classList.remove('active');
        }

        this.style.backgroundColor = '#f0f0f0';
        this.querySelector('.gal2').style.opacity = '1';
        this.classList.add('active');
    });
});