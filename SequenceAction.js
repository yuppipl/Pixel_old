Pixel.SequenceAction = function(action1, action2){
		this.args = arguments;
		this.currentIndex = 0;
		this.running = true;

		this.update = function(currentTime){
			if(this.currentIndex < this.args.length){
				var action = this.args[this.currentIndex];
				action.update(currentTime);
				if(action.isFinished()){
					this.currentIndex++;
				}
			} else{
				this.running = false;
			}

		}

		this.isFinished = function(){
			return this.running;
		}
	}