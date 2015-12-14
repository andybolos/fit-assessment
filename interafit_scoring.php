<?php
/**
 * InteraFit Scoring
 * Copyright InteraSolutions, Inc
 *
 * contains the functions used to score the assessment batteries in legacy version of InteraFIT
 * 
 *
 */
	 
	 
/**
 * @function zone_check
 * @description checks score against floor and ceiling for each of three zones (high, moderate, low)
 *
 * @param  integer  $input  	 the score for a sub-scale
 * @param  integer  $low_floor	 the floor for "low" level of concern
 * @param  integer  $low_ceil    the ceiling for "low" level of concern
 * @param  integer  $med_floor   the floor for the "moderate" level of concern
 * @param  integer  $med_ceil    the ceiling for the "moderate" level of concern
 * @param  integer  $high_floor  the floor for the "high" level of concern
 * @param  integer  $high_ceil   the ceiling for the "high" level of concern
 *
 * @return Array    $score_array {$score, $concern, $gets_module}
 */ 
	 
// this function will be used to determine (and return) the concern level and whether or not someone gets the module 
// it also returns the passed score just to keep everything in the same array in the end... $input is the same as $score... 
function zone_check($input, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil) {
	if (($input >= $low_floor) && ($input <= $low_ceil)) {
		$score_array = array("score" => $input, "concern" => "LOW", "gets_module" => 0);
	} elseif (($input >= $med_floor) && ($input <= $med_ceil)) {
		$score_array = array("score" => $input, "concern" => "MED", "gets_module" => 1);
	} elseif (($input >= $high_floor) && ($input <= $high_ceil)) {
		$score_array = array("score" => $input, "concern" => "HIGH", "gets_module" => 1);
	} else {
		return FALSE;
	}
	
	return $score_array;
} 

		
/**
 * @function ebi_score
 *
 * @param  integer(s) $i1 - $i36, the 36 items contained in this scale
 * @return the result of zone_check
 */
function ebi_score($i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9, $i10, $i11, $i12, $i13, $i14, $i15, $i16, $i17, $i18, $i19, $i20, $i21, $i22, $i23, $i24, $i25, $i26, $i27, $i28, $i29, $i30, $i31, $i32, $i33, $i34, $i35, $i36) {
	$score = 0;

	// sum all inputs
	for ($i=1; $i<37; $i++) {
		// "Variable variables" - see: http://www.php.net/manual/en/language.variables.variable.php
		$score += ${"i".$i};		
	}
	
	
	// set our 'cutoff scores'
	// low concern
	$low_floor = 36; //  1 point per item minimum - zero score impossible
	$low_ceil = 102;
		
	// moderate concern
	$med_floor = 103;
	$med_ceil = 144;
	
	// high concern
	$high_floor = 145;
	$high_ceil = 216; // 6 point per item maximum - >216 scores impossible
		
	// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
	$ebi_score = zone_check($score, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil);
	return $ebi_score;
} 



/**
 * @function bia_score
 *
 * @param  integer(s) $i1 - $i30, the 30 items contained in this scale
 * @return the result of zone_check
 */
function bia_score($i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9, $i10, $i11, $i12, $i13, $i14, $i15, $i16, $i17, $i18, $i19, $i20, $i21, $i22, $i23, $i24, $i25, $i26, $i27, $i28, $i29, $i30) {
	$score = 0;
	
	for ($i=1; $i<31; $i++) {
		// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
		$score += ${"i".$i};
	} 
	
	
	// set our 'cutoff scores'
	// low concern
	$low_floor = 30; //  1 point per item minimum - zero score impossible
	$low_ceil = 90;
	
	// moderate concern
	$med_floor = 91;
	$med_ceil = 135;
	
	// high concern
	$high_floor = 135;
	$high_ceil = 180; // 6 point per item maximum - >180 scores impossible
	

	// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
	$bia_score = zone_check($score, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil);

	return $bia_score;	
}
		
		
		
/**
 * @function posi_score
 *
 * @param  integer(s) $i1 - $i30, the 30 items contained in this scale
 * @return the result of zone_check
 */		
function posi_score($i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9, $i10, $i11, $i12, $i13, $i14, $i15, $i16, $i17, $i18, $i19, $i20, $i21, $i22, $i23, $i24, $i25, $i26, $i27, $i28, $i29, $i30) {
	// initialize score at zero
	$score = 0;
	
	for ($i=1; $i<31; $i++) {
		// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
		$score += ${"i".$i};
	} // end for loop
	
	
	// set our 'cutoff scores'
	// low concern
	$low_floor = 30; //  1 point per item minimum - zero score impossible
	$low_ceil = 114;
	
	// moderate concern
	$med_floor = 115;
	$med_ceil = 149;
	
	// high concern
	$high_floor = 150;
	$high_ceil = 180; // 6 point per item maximum - >180 scores impossible
	
	// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
	$posi_score = zone_check($score, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil);
	return $posi_score;
} 

		
		
/**
 * @function bdsi_score
 *
 * @param  integer(s) $i1 - $i9, the 9 items contained in this scale
 * @return the result of zone_check
 */	
function bdsi_score($i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9) {
	// initialize score at zero
	$score = 0;
	
	for ($i=1; $i<10; $i++) {
		// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
		$score += ${"i".$i};
	} // end for loop
	
	
	// set our 'cutoff scores'
	// low concern
	$low_floor = 9; //  1 point per item minimum - zero score impossible
	$low_ceil = 24;
	
	// moderate concern
	$med_floor = 25;
	$med_ceil = 40;
	
	// high concern
	$high_floor = 41;
	$high_ceil = 54; // 6 point per item maximum - >54 scores impossible
	
	// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
	$bdsi_score = zone_check($score, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil);
	return $bdsi_score;
}
		
		
		
/**
 * @function basi_score
 *
 * @param  integer(s) $i1 - $i9, the 9 items contained in this scale
 * @return the result of zone_check
 */	

function basi_score($i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9) {
	// initialize score at zero
	$score = 0;
	
	for ($i=1; $i<10; $i++) {
		// "Variable variables"  -  see: http://www.php.net/manual/en/language.variables.variable.php
		$score += ${"i".$i};
	} // end for loop
	
	
	// set our 'cutoff scores'
	// low concern
	$low_floor = 9; //  1 point per item minimum - zero score impossible
	$low_ceil = 26;
	
	// moderate concern
	$med_floor = 27;
	$med_ceil = 35;
	
	// high concern
	$high_floor = 36;
	$high_ceil = 54; // 6 point per item maximum - >54 scores impossible
	
	// now use the zone_check function to receive an array with the score, concern level, and if they get the module or not (as a boolean TRUE/FALSE value)
	$basi_score = zone_check($score, $low_floor, $low_ceil, $med_floor, $med_ceil, $high_floor, $high_ceil);
	return $basi_score;
}
		
		
		
				
/**
 * @function bdsi_score
 *
 * @param  integer(s) $i1 - $i9, the 9 items contained in this scale
 * @return the result of zone_check
 */	
function rcq_score($pre1, $pre2, $pre3, $con1, $con2, $con3, $prep1, $prep2, $prep3, $act1, $act2, $act3, $maint1, $maint2, $maint3) {
	// initialize scores at zero
	$stage1_score = 0;
	$stage2_score = 0;
	$stage3_score = 0;
	$stage4_score = 0;
	$stage5_score = 0;
	
	// sum up the score of all the precontemplation items in the stage1 variable
	for ($pre=1; $pre<4; $pre++) { $stage1_score += ${"pre".$pre}; }
	
	// sum up the score of all the contemplation items in the stage2 variable
	for ($con=1; $con<4; $con++) { $stage2_score += ${"con".$con}; }
	
	// sum up the score of all the preparation items in the stage3 variable
	for ($prep=1; $prep<4; $prep++) { $stage3_score += ${"prep".$prep}; }
	
	// sum up the score of all the precontemplation items in the stage4 variable
	for ($act=1; $act<4; $act++) { $stage4_score += ${"act".$act}; }
	
	// sum up the score of all the precontemplation items in the stage5 variable
	for ($maint=1; $maint<4; $maint++) { $stage5_score += ${"maint".$maint}; }
	
	
	$score_array = array("precontemplation" => $stage1_score, "contemplation" => $stage2_score, "preparation" => $stage3_score, "action" => $stage4_score, "maintenance" => $stage5_score);
	
	$high_score = 0;
	$high_stage = "";
	
	// this returns the highest score and highest stage. If two or more stages are tied for highest score, it will give us the more advanced stage
	// Chris note: 2015 for DevMountain:  In case the outcome of this process isn't clear:
	//    * Find the stage of change with the highest score
	//    * If one stage has a higher score than all others, that's the high score and the stage
	//    * If two or more stages are tied for highest score, then the most advanced stage of change is selected
	//      Precontemplation is lowest stage, Maintenance is the highest stage   
	foreach ($score_array as $key=>$value) {
			if ($value >= $high_score) {
					$high_stage = $key;
					$high_score = $value;
			}
	}
	
	$rcq_score = array("stage" => $high_stage, "score" => $high_score, "pre_score" => $stage1_score, "con_score" => $stage2_score, "prep_score" => $stage3_score, "act_score" => $stage4_score, "maint_score" => $stage5_score);
	return $rcq_score;
} 
		
		
		
		
		
		
		
/**
 * EXAMPLE DATA:
 *
 *	ebi_score(1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,4,5,4,5,3,3,2,2,2,1,1,1,3,3,3,3,4,5,6,6);
 *	bia_score(1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,4,5,4,5,3,3,2,2,2,1,1,1,3,3);
 *	posi_score(6,6,6,5,5,6,5,4,6,6,6,5,5,4,5,6,4,5,4,5,5,5,6,2,2,6,5,5,6,4);
 *	bdsi_score(1,2,6,3,5,3,2,4,6);
 *	basi_score(2,2,2,2,2,2,3,2,2);
 *	rcq_score(2,3,4,5,6,1,2,2,2,1,5,3,1,2,5);
 */	