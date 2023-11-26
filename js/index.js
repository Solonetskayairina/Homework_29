    const boxRef = document.querySelector('.box')
    const step = 10;

    window.addEventListener('keydown', event => {

        const bemsText = document.createElement('div');
        bemsText.textContent = 'БЕМС';
        bemsText.style.position = 'absolute';
        bemsText.style.top = '50%';
        bemsText.style.left = '50%';
        bemsText.style.transform = 'translate(-50%, -50%)';
        bemsText.style.color = 'red'
        const boxRefStyle = boxRef.getBoundingClientRect();

        if (event.key === 'ArrowLeft') {
            boxRef.style.left = `${boxRefStyle.left - step}px`;
            if (boxRefStyle.left - step < 0) {
                boxRef.style.left = '20px'
                addAndRemoveBemsText()
            }
        } else if (event.key === 'ArrowRight' && boxRefStyle.left + boxRefStyle.width < document.documentElement.clientWidth ) {
            boxRef.style.left = `${boxRefStyle.left + step}px`;
            if (boxRefStyle.left + boxRefStyle.width + step > document.documentElement.clientWidth) {
                boxRef.style.left =`${boxRefStyle.left - 20}px`
                addAndRemoveBemsText()
            }
        } else if (event.key === 'ArrowUp') {
            boxRef.style.top = `${boxRefStyle.top - step}px`;
            if (boxRefStyle.top - step < 0) {
                boxRef.style.top = '20px'
                addAndRemoveBemsText()
            }
        } else if (event.key === 'ArrowDown' && boxRefStyle.top + boxRefStyle.height < document.documentElement.clientHeight) {
            boxRef.style.top = `${boxRefStyle.top + step}px`;
            if (boxRefStyle.top + boxRefStyle.height + step > document.documentElement.clientHeight) {
                boxRef.style.top = `${boxRefStyle.top - 20}px`
                addAndRemoveBemsText()
            }
        } else if (event.key === ' ') {
            jumping()
        } else if (event.key === 'Meta') {
            boxRef.style.width = `${parseFloat(getComputedStyle(boxRef).width) * 1.25}px`
            boxRef.style.height = `${parseFloat(getComputedStyle(boxRef).height) * 0.6}px`
        }

        function addAndRemoveBemsText() {
            boxRef.appendChild(bemsText);
            setTimeout(() => {
                boxRef.removeChild(bemsText);
            }, 2000);
        }

        function jumping(){
            boxRef.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                boxRef.style.transform = 'translateY(0)';
            }, 300);
        }
    });