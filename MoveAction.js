	Pixel.MoveAction = function(sprite, time, x, y){
		this.sprite = sprite;
		this.x = x;
		this.y = y;

		this.started = false;
		this.finished = false;

		this.start = function(){
			this.startTime = Date.now();
			this.endTime = this.startTime + time * 1000;
			this.orgX = this.sprite.position.x;
			this.orgY = this.sprite.position.y;
		}

		this.update = function(currentTime){
			if(this.isFinished()) return;

			if(!this.started){
				this.start();
				this.started = true;	
			}
	
			var progress = (currentTime - this.startTime) / (this.endTime - this.startTime);

			
			this.sprite.position.x = this.orgX - (this.orgX - this.x) * progress;
			this.sprite.position.y = this.orgY - (this.orgY - this.y) * progress;

	    	if(currentTime > this.endTime){
	    		this.finished = true;
	    	}
		}

		this.isFinished = function(){
			return this.finished;
		}

	}