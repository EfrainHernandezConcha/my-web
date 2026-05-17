// Container-Img
        const container = document.querySelector('.container-img');
        
        function logContainerDimensions() {
            console.log('Container Width:', container.offsetWidth + 'px');
            console.log('Container Height:', container.offsetHeight + 'px');
        }

        // Log on load
        window.addEventListener('load', logContainerDimensions);

        // Log on resize
        window.addEventListener('resize', logContainerDimensions);

//funcion zoom on scroll
const zoom = document.querySelectorAll('.zoom');
function zoomScroll() {
  const alturaPantalla = window.innerHeight;

  zoom.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 50) {
      el.classList.add('zoom-on');
    }
    else {
        el.classList.remove('zoom-on')
      }
  });
}


window.addEventListener('scroll', zoomScroll);