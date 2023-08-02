function copyUrl(obj) {
    text = document.title + ' ' + document.URL;

    navigator.clipboard.writeText(text).then(
        () => {
            className = 'copy_complete';

            obj.classList.add(className);
            setTimeout(
                () => {obj.classList.remove(className)},
                1500 // CSS より少し長めに
            );
        }
    );
}