// Color Changing Text
function spectrum(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() *  256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('i').animate( { color: hue }, 2000);
    $('body').animate( { backgroundColor: hue }, 2100);
    spectrum();
 };