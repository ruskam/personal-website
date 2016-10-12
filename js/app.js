/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
    particles: {
        color: '#aaa',
        shape: 'circle',
        opacity: {
            opacity: 1
        },
        size: 2.5,
        size_random: true,
        nb: 150,
        line_linked: {
            enable_auto: true,
            distance: 250,
            color: '#aaa',
            opacity: 0.5,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 0.8
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 200
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push',
                nb: 4
            }
        }
    },
    retina_detect: true
});
