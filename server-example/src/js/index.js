import '../css/styles.css'
import text from './text'


text();


if(module.hot){
    module.hot.accept('./text.js', function(){
        console.log('updated')
        text();
    })
}