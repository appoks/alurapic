<template>
    <div>
		<button 
			class="button"
			:class="buttonStyle"
			:type="tipo"
			@click="fireAction()">
		{{rotulo}}
		</button>
    </div>    
</template>

<script>
export default {
    props: {
        tipo: {
			type: String,
            required:true
        },
        rotulo: {
			type: String,
            required: true
		},
		confirmar: {
			type: Boolean
		},
	},
	
    methods: {
        fireAction(){
			if(this.confirmar){
				if(confirm('Confirmar a ação?')) {
					this.$emit('click'); //overrides default click event
				}
				return;
			}
			this.$emit('click'); //overrides default click event 
			
		}
			//this.$emit('botaoativado');
	},
	
	computed: {
		buttonStyle() {
			if (!this.tipo || this.tipo == 'default'){
				return 'button-default';
			}
			if ( this.tipo == 'danger'){
				return 'button-danger';
			}
			return 'button-default';
		}
	}
}
</script>

<style>
.button {
        display: inline-block;
		width: 100%;
        padding: 10px;
        border-radius: 3px;
        margin: 5px auto;
        font-size: 1.2em;
		cursor: pointer;
    }

    .button-danger {
        background: firebrick;
        border: 1px solid #2c3e50;;
        color: white;
    }

    .button-default {
        background: #42b983;
        color: white;
        border: 1px solid #2c3e50;;
    }
</style>