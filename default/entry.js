(global => {
    global['default'] = {
        bootstrap: () => {
            console.log('default bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log(props.singleSpa)
            console.log(props.singleSpa.getMountedApps())
            console.log('default mount');
            var script2 = document.createElement("script");
            script2.src = "http://localhost:8080/index.js";
            document.head.appendChild(script2);
            return Promise.resolve();
        },
        unmount: () => {
            console.log('default unmount');
            return Promise.resolve();
        },
    };
})(window);