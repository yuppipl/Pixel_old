Pixel.Action = {
	started: false,
	finished: false,

	init: function(){
		this.start();	
		this.started = true;
	},

	tick: function(currentTime){
		if(this.isFinished()) return;

		if(!this.started){
			this.init();	
		}

    	if(!this.update(currentTime)){
			this.finished = true;
		}
	},

	isFinished: function(){
		return this.finished;
	}

}