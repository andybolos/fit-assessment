// TODO (jcd 12/15) return a response from getResults

/* NOTE (jcd 12/15) getResults is expecting an object as follows:

	obj = {
		ebi_score: {
			concern: 'HIGH' //(or 'LOW' or 'MED')
		},
		bia_score: {
			concern: ...
		},
		... (other score types, posi, bdsi, basi)
	}
	
	and returns an object as follows (to be used in results view):
	
	return_obj = {
		ebi : {
			scale1_color: 'ssi_red', // (or 'ssi_yellow' or 'ssi_green')
			nar: 'You do/do not appear... ', (The narrative)
			bul1: 'Check out...', (bullet points)
			bul2: 'More info...'	
		}
		bia: {
			... (similar)
		},
		... (other score types)
	}

*/
module.exports = {
	getResults: function (req, res) {
		var scores_obj = req.body.scores; // TODO (jcd 12/15) Not sure if this is passed from the client or saved on session or something else
		var results_obj = {
			ebi: {},
			bia: {},
			posi: {},
			bdsi: {},
			basi: {}
		};

		if (scores_obj.ebi_score) {
			if (scores_obj.ebi_score.concern === 'HIGH') {
				results_obj.ebi.scale1_color = 'ssi_red';
				results_obj.ebi.nar = 'You appear to engage in seriously problematic eating behaviors. Poor eating behaviors can be one of the greatest challenges to overcome with respect to improving health and fitness as these impact diet, nutrition, portion size, and all other important food related areas.';
				results_obj.ebi.bul1 = 'Check out the Eating Behaviors module for tips that will help you improve your eating habits!';
				results_obj.ebi.bul2 = 'Talk with your trainer about your diet and eating habits, they can help you take control over negative habits resulting in healthier eating.';
			} else if (scores_obj.ebi_score.concern === 'MED') {
				results_obj.ebi.scale1_color = 'ssi_yellow';
				results_obj.ebi.nar = 'You appear to engage in moderately problematic eating behaviors. It is important to pay close attention to these as poor eating behaviors can cause some of the greatest challenges with respect to improve one\'s health and fitness.';
				results_obj.ebi.bul1 = 'Check out the Eating Behaviors module for tips that will help you improve your eating habits!';
				results_obj.ebi.bul2 = 'Talk with your trainer about your diet and eating habits, they can help you take control over negative habits resulting in healthier eating.';
			} else if (scores_obj.ebi_score.concern === 'LOW') {
				results_obj.ebi.scale1_color = 'ssi_green';
				results_obj.ebi.nar = 'You do not appear to have problematic eating behaviors. Eating behaviors can change over time and it is important that you continue to eat in a healthy manner, maintaining realistic expectations and goals for yourself and your body.';
				results_obj.ebi.bul1 = 'Check out the Eating Behaviors module for tips that will help you maintain your healthy eating habits!';
				results_obj.ebi.bul2 = 'If your eating habits change suddenly or during times of stress or emotional turbulence, talk with your trainer about this change right away.';
			}

		}

		if (scores_obj.bia_score.concern === 'HIGH') {
			results_obj.bia.scale1_color = 'ssi_red';
			results_obj.bia.nar = 'You appear to have considerable negative body image issues at this time. Negative body image can have serious impact on a person\'s ability to reach their health and fitness goals as one sometimes undermines their own efforts or has unrealistic or unhealthy expectations.';
			results_obj.bia.bul1 = 'Read the included Body Image module for more info about negative body image and exercises and tips that will help you work through this issue.';
			results_obj.bia.bul2 = 'Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.';
		} else if (scores_obj.bia_score.concern === 'MED') {
			results_obj.bia.scale1_color = 'ssi_yellow';
			results_obj.bia.nar = 'You appear to have moderate negative body image issues at this time. Poor body image can make successfully reaching one\'s health and fitness goals very challenging as one might unintentionally undermine their own efforts or have unrealistic or unhealthy expectations.';
			results_obj.bia.bul1 = 'Read the included Body Image module for more info about negative body image and exercises and tips that will help you work through this issue.';
			results_obj.bia.bul2 = 'Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.';
		} else if (scores_obj.bia_score.concern === 'LOW') {
			results_obj.bia.scale1_color = 'ssi_green';
			results_obj.bia.nar = 'You do not appear to have a negative body image at this time. Positive body image is a very important element in successfully reaching one\'s health and fitness goals as you are able to be accepting and appreciative of your body and more able to make realistic and healthy goals.';
			results_obj.bia.bul1 = 'Read the included Body Image module for tips on maintaining your already positive body image!';
			results_obj.bia.bul2 = 'Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.';
		}

		if (scores_obj.posi_score.concern === 'HIGH') {
			results_obj.posi.scale1_color = 'ssi_red';
			results_obj.posi.nar = 'You appear to be experiencing high levels of stress at this time. This level of stress can be very detrimental to your success in reaching your health and fitness goals in addition to causing a multitude of emotional and physical problems.';
			results_obj.posi.bul1 = 'Check out the attached Prevalence of Stress module for exercises and tips that will help you reduce the impact of stressors in your life.';
			results_obj.posi.bul2 = 'Your trainer needs to be aware of the stressors that are most prevalent in your life in order to help you achieve the results you are working for.';
		} else if (scores_obj.posi_score.concern === 'MED') {
			results_obj.posi.scale1_color = 'ssi_yellow';
			results_obj.posi.nar = 'You appear to be experiencing moderate levels of stress at this time. Although a little stress can be a good motivator, even moderate stress can be detrimental to your success in reaching your health and fitness goals in addition to causing a multitude of emotional and physical problems.';
			results_obj.posi.bul1 = 'Check out the attached Prevalence of Stress module for exercises and tips that will help you reduce the impact of stressors in your life.';
			results_obj.posi.bul2 = 'Your trainer needs to be aware of the stressors that are most prevalent in your life in order to help you achieve the results you are working for.';
		} else if (scores_obj.posi_score.concern === 'LOW') {
			results_obj.posi.scale1_color = 'ssi_green';
			results_obj.posi.nar = 'You do not appear to be experiencing high levels of stress at this time. On a daily basis, you may be faced with stressful events and your overall stress levels can change significantly moment by moment. Pay attention to your stress levels as these can negatively impact your success with health and fitness goals.';
			results_obj.posi.bul1 = 'Stay mindful of stressful events in your life because stress levels can ebb and flow. If you start feeling overwhelmed, work through the Stress module.';
			results_obj.posi.bul2 = 'If you feel that your stress is getting out of control, talk with our trainer about how to reduce stress and prioritize goals to keep things manageable.';
		}

		if (scores_obj.bdsi_score.concern === 'HIGH') {
			results_obj.bdsi.scale1_color = 'ssi_red';
			results_obj.bdsi.nar = 'You appear to be experiencing high levels of depression at this time. Serious depression can create a multitude of challenges for people trying to improve their health and fitness as many depressive symptoms are polar opposites from what is generally needed to improve these things.';
			results_obj.bdsi.bul1 = 'Check out the Depression module for critical tips and exercises that will help you elevate your mood and your motivation!';
			results_obj.bdsi.bul2 = 'Talk with your trainer about your depressive symptoms as soon as possible. Let them help support you during emotional turbulence!';
		} else if (scores_obj.bdsi_score.concern === 'MED') {
			results_obj.bdsi.scale1_color = 'ssi_yellow';
			results_obj.bdsi.nar = 'You appear to be experiencing moderate levels of depression at this time. Moderate depression can create a variety of challenges for someone trying to improve upon their health and fitness as many depressive symptoms are polar opposites for what is generally needed to make positive change.';
			results_obj.bdsi.bul1 = 'Check out the Depression module for critical tips and exercises that will help you elevate your mood and your motivation!';
			results_obj.bdsi.bul2 = 'Talk with your trainer about your depressive symptoms as soon as possible. Let them help support you during emotional turbulence!';
		} else if (scores_obj.bdsi_score.concern === 'LOW') {
			results_obj.bdsi.scale1_color = 'ssi_green';
			results_obj.bdsi.nar = 'You do not appear to be experiencing depression at this time. Many things can cause depressive symptoms and for many these symptoms ebb and flow. Pay attention to yourself, keeping mindful of depressive symptoms as these can have a very negative impact on your ability so successfully reach your health and fitness goals.';
			results_obj.bdsi.bul1 = 'You may not be suffering from it now, but be on the lookout for feelings of depression! If you feel depressed, work through the Depression module.';
			results_obj.bdsi.bul2 = 'If you think you may be experiencing symptoms of depression, talk to your trainer about how you are feeling and work some things out in your session.';
		}

		if (scores_obj.basi_score.concern === 'HIGH') {
			results_obj.basi.scale1_color = 'ssi_red';
			results_obj.basi.nar = 'You appear to be experiencing high levels of anxiety at this time. High anxiety can seriously hinder your ability to successfully reach your health and fitness goals as you may feel too anxious to actually take the necessary steps toward your goals.';
			results_obj.basi.bul1 = 'Check out the Anxiety module for more info about exercises and tips that will help you work through your anxiety.';
			results_obj.basi.bul2 = 'Let your trainer know if you are feeling anxious during or between sessions. They need to be aware of your anxiety in order to help you.';
		} else if (scores_obj.basi_score.concern === 'MED') {
			results_obj.basi.scale1_color = 'ssi_yellow';
			results_obj.basi.nar = 'You appear to be experiencing moderate levels of anxiety at this time. Too much anxiety can make it challenging for you to successfully reach your health and fitness goals as you may feel too anxious to actually take the necessary steps toward your goals.';
			results_obj.basi.bul1 = 'Check out the Anxiety module for more info about exercises and tips that will help you work through your anxiety.';
			results_obj.basi.bul2 = 'Let your trainer know if you are feeling anxious during or between sessions. They need to be aware of your anxiety in order to help you.';
		} else if (scores_obj.basi_score.concern === 'LOW') {
			results_obj.basi.scale1_color = 'ssi_green';
			results_obj.basi.nar = 'You do not appear to be experiencing serious anxiety at this time. However, many things can cause people anxiety and it is important that you pay attention to your anxiety levels as too much anxiety can hinder your ability to successfully reach your health and fitness goals.';
			results_obj.basi.bul1 = 'You may not be suffering from it now, but be on the lookout for feelings of worry and anxiety! If you feel anxious, work through the Anxiety module.';
			results_obj.basi.bul2 = 'If you think you may be experiencing symptoms of anxiety, talk to your trainer about how you are feeling and work some things out in your session.';
		}

		return results_obj; 
	}
}