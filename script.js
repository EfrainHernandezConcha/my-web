// ContainerImg1
        const container = document.querySelector('.container-img');
        
        function logContainerDimensions() {
            console.log('Container Width:', container.offsetWidth + 'px');
            console.log('Container Height:', container.offsetHeight + 'px');
        }

        // Log on load
        window.addEventListener('load', logContainerDimensions);

        // Log on resize
        window.addEventListener('resize', logContainerDimensions);


// ContainerImg2 
        const containerImg2 = document.querySelector('.container-img2');
        
        function logContainerDimensions() {
            console.log('Container Width:', containerImg2.offsetWidth + 'px');
            console.log('Container Height:', containerImg2.offsetHeight + 'px');
        }

        // Log on load
        window.addEventListener('load', logContainerDimensions);

        // Log on resize
        window.addEventListener('resize', logContainerDimensions);
