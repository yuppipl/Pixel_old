Pixel.RepeatAction = function(action, times){
	this.action = action;
    this.times = times;
	this.currentCycle = 0;
	
	this.start = function(){
	}

	this.update = function(currentTime){
		if(this.currentCycle < this.times){
			this.action.tick(currentTime);
			if(action.isFinished()){
				this.currentCycle++;
                action.init();
                console.log(this.currentCycle);
			}
			return true;
		} 
		return false;
	}
}

Pixel.RepeatAction.prototype = Pixel.Action;