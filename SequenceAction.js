Pixel.SequenceAction = function(){
	this.args = arguments;
	this.currentIndex = 0;
	
	this.start = function(){
// 		for(var i=0; i<this.args.length; i++){
// 			var action = this.args[i];
// 			action.init();
// 		}
	}

	this.update = function(currentTime){
		if(this.currentIndex < this.args.length){
			var action = this.args[this.currentIndex];
			action.tick(currentTime);
			if(action.isFinished()){
				this.currentIndex++;
			}
			return true;
		} 
		return false;
	}
}

Pixel.SequenceAction.prototype = Pixel.Action;