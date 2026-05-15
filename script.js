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

