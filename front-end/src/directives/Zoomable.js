import Vue from 'vue';

Vue.directive('zoomable', {

    bind(el, binding) {

        ////  v-{directiveName}:{argument}.{modiefier1}.{modifier2}="binding.value" ////
        let currentVal = 1;
        let increaseVal = binding.value || 1.15;
        let animate = binding.modifiers.animate || false;
        let reverse = binding.modifiers.reverse || false;

       if(binding.arg){
           console.log('this directive doesnt support arguments (for now)')
       }


        el.addEventListener('dblclick', function() {
            if((reverse && currentVal == 1 )|| !reverse){
                currentVal += increaseVal;
            }
            else if (reverse && currentVal != 1 ){
                currentVal = 1;
            } 
            el.style.transform = `scale(${currentVal})`;

            if(animate) {
                el.style.transition = "transform 3s";
            }
        })
    }

});