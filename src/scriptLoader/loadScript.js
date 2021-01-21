export const appendScript = () => {
    const allScripts = [
    '../assets/js/jquery.min.js',
    '../assets/js/select2.min.js',
    '../assets/js/intlTelInput.min.js',
    '../assets/js/intlTelInput-jquery.min.js',
    '../assets/js/popper.min.js',
    '../assets/js/mdb.min.js',
    '../assets/js/vfs_fonts.js',
    '../assets/js/buttons.print.min.js',
    '../assets/js/moment.min.js',
    '../assets/js/dataTables.rowReorder.min.js',
    '../assets/js/dataTables.responsive.min.js',
    '../assets/js/mCustomScrollbar.min.js',
    '../assets/js/jquery.validate.min.js',
    '../assets/js/theme.js',
    '../assets/js/buttons.html5.min.js',
    '../assets/js/jquery.dataTables.min.js',
    '../assets/js/daterangepicker.min.js',
    '../assets/js/dataTables.bootstrap.min.js',    
    '../assets/js/dataTables.buttons.min.js',
    '../assets/js/jszip.min.js',
    '../assets/js/pdfmake.min.js',
    ];
    allScripts.map( scriptPath => {
        const script = document.createElement("script");
        script.src = scriptPath;
        script.async = true;
        document.body.appendChild(script);
        return scriptPath;
    });
    
}


export const removeScript = () => {
    let allsuspects=document.getElementsByTagName("script");
    for (let i=allsuspects.length; i>=0; i--){
if (
    allsuspects[i] && allsuspects[i].getAttribute("src")!==null){
           allsuspects[i].parentNode.removeChild(allsuspects[i])
        }    
    }
}