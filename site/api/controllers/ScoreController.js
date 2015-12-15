/* NOTE: (jcd 12/15) I'm passing the results (scores) to the score functions through req.body as an array rather than passing multiple arguments to the function as it was in php.
	
TODO (jcd 12/15) return some response. At what point in the program flow are these functions called?
TODO (jcd 12/16) change all functions to have req, res parameters, remove references to arguments

*/

module.exports = {
	zone_check: function (input, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil) {
		var score_obj = {};
		if ((input >= low_floor) && (input <= low_ceil)) {
			score_obj = {
				score: input,
				concern: "LOW",
				gets_module: false
			}
		} else if ((input >= med_floor) && (input <= med_ceil)) {
			score_obj = {
				score: input,
				concern: "MED",
				gets_module: true
			}
		} else if ((input >= high_floor) && (input <= high_ceil)) {
			score_obj = {
				score: input,
				concern: "HIGH",
				gets_module: true
			}
		} else {
			return false;
		}

		return score_obj;
	},
	ebi_score: function (req, res) {
		var args = req.body.results;
		// There are 36 arguments expected
		var ebi_score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil;
		var score = 0;
		// sum all inputs
		for (var i = 0; i < args.length; i++) {
			score += args[i];
		}
	
		// set our 'cutoff scores'
		// low concern
		low_floor = 36; //  1 point per item minimum - zero score impossible
		low_ceil = 102;
		
		// moderate concern
		med_floor = 103;
		med_ceil = 144;
	
		// high concern
		high_floor = 145;
		high_ceil = 216; // 6 point per item maximum - >216 scores impossible
		
		// now use the zone_check function to receive an object with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
		ebi_score = this.zone_check(score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil);
		return ebi_score;
	},
	bia_score: function () {
		// 30 arguments expected
		var bia_score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil;
		var score = 0;
		for (var i = 0; i < arguments.length; i++) {
			// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
			score += arguments[i];
		} 
	
	
		// set our 'cutoff scores'
		// low concern
		low_floor = 30; //  1 point per item minimum - zero score impossible
		low_ceil = 90;
	
		// moderate concern
		med_floor = 91;
		med_ceil = 135;
	
		// high concern
		high_floor = 135;
		high_ceil = 180; // 6 point per item maximum - >180 scores impossible
	

		// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
		bia_score = this.zone_check(score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil);

		return bia_score;
	},
	posi_score: function () {
		// 30 arguments expected
		var posi_score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil;
		// initialize score at zero
		var score = 0;
		for (var i = 0; i < arguments.length; i++) {
			score += arguments[i];
		} // end for loop
	
	
		// set our 'cutoff scores'
		// low concern
		low_floor = 30; //  1 point per item minimum - zero score impossible
		low_ceil = 114;
	
		// moderate concern
		med_floor = 115;
		med_ceil = 149;
	
		// high concern
		high_floor = 150;
		high_ceil = 180; // 6 point per item maximum - >180 scores impossible
	
		// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
		posi_score = this.zone_check(score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil);
		return posi_score;
	},
	bdsi_score: function () {
		// 9 arguments
		var bdsi_score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil;
		// initialize score at zero
		var score = 0;
		for (var i = 0; i < arguments.length; i++) {
			// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
			score += arguments[i];
		} // end for loop
	
	
		// set our 'cutoff scores'
		// low concern
		low_floor = 9; //  1 point per item minimum - zero score impossible
		low_ceil = 24;
	
		// moderate concern
		med_floor = 25;
		med_ceil = 40;
	
		// high concern
		high_floor = 41;
		high_ceil = 54; // 6 point per item maximum - >54 scores impossible
	
		// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
		bdsi_score = this.zone_check(score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil);
		return bdsi_score;
	},
	basi_score: function () {
		//9 arguments
		var basi_score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil;
		// initialize score at zero
		var score = 0;
		for (var i = 0; i < arguments.length; i++) {
			// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
			score += arguments[i];
		} // end for loop
	
	
		// set our 'cutoff scores'
		// low concern
		low_floor = 9; //  1 point per item minimum - zero score impossible
		low_ceil = 26;
	
		// moderate concern
		med_floor = 27;
		med_ceil = 35;
	
		// high concern
		high_floor = 36;
		high_ceil = 54; // 6 point per item maximum - >54 scores impossible
	
		// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
		basi_score = this.zone_check(score, low_floor, low_ceil, med_floor, med_ceil, high_floor, high_ceil);
		return basi_score;
	},
	rcq_score: function (pre1, pre2, pre3, con1, con2, con3, prep1, prep2, prep3, act1, act2, act3, maint1, maint2, maint3) {
		var rcq_score;
		var pre = [pre1, pre2, pre3];
		var con = [con1, con2, con3];
		var prep = [prep1, prep2, prep3];
		var act = [act1, act2, act3];
		var maint = [maint1, maint2, maint3];
		// initialize scores at zero
		var stage1_score = 0;
		var stage2_score = 0;
		var stage3_score = 0;
		var stage4_score = 0;
		var stage5_score = 0;
	
		// sum up the score of all the precontemplation items in the stage1 variable
		for (var i = 0; i < pre.length; i++) { stage1_score += pre[i]; }
	
		// sum up the score of all the contemplation items in the stage2 variable
		for (var i = 0; i < con.length; i++) { stage2_score += con[i]; }
	
		//2sum up the score of all the preparation items in the stage3 variable
		for (var i = 0; i < prep.length; i++) { stage3_score += prep[i]; }
	
		// sum up the score of all the action items in the stage4 variable
		for (var i = 0; i < act.length; i++) { stage4_score += act[i]; }
	
		// sum up the score of all the precontemplation items in the stage5 variable
		for (var i = 0; i < maint.length; i++) { stage5_score += maint[i]; }

		var score_obj = {
			precontemplation: stage1_score,
			contemplation: stage2_score,
			preparation: stage3_score,
			action: stage4_score,
			maintenance: stage5_score
		}

		var high_score = 0;
		var high_stage = "";
	
		// this returns the highest score and highest stage. If two or more stages are tied for highest score, it will give us the more advanced stage
		// Chris note: 2015 for DevMountain:  In case the outcome of this process isn't clear:
		//    * Find the stage of change with the highest score
		//    * If one stage has a higher score than all others, that's the high score and the stage
		//    * If two or more stages are tied for highest score, then the most advanced stage of change is selected
		//      Precontemplation is lowest stage, Maintenance is the highest stage   
		for (var key in score_obj) {
			if (score_obj[key] >= high_score) {
				high_stage = key;
				high_score = score_obj[key];
			}
		}

		rcq_score = {
			stage: high_stage,
			score: high_score,
			pre_score: stage1_score,
			con_score: stage2_score,
			prep_score: stage3_score,
			act_score: stage4_score,
			maint_score: stage5_score
		}


		return rcq_score;
	}
}

