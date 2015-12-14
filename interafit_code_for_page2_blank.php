<?php

// used in __report_page2_blank.pdf

// Eating Behaviors
if ($_SESSION['ebi_score']['concern'] == "HIGH") { $scale1_color = "ssi_red"; 
	$nar = "You appear to engage in seriously problematic eating behaviors. Poor eating behaviors can be one of the greatest challenges to overcome with respect to improving health and fitness as these impact diet, nutrition, portion size, and all other important food related areas.";
	
	$bul1 = "Check out the Eating Behaviors module for tips that will help you improve your eating habits!";
	
	$bul2 = "Talk with your trainer about your diet and eating habits, they can help you take control over negative habits resulting in healthier eating.";
				
}
elseif ($_SESSION['ebi_score']['concern'] == "MED") { $scale1_color = "ssi_yellow"; 
	$nar = "You appear to engage in moderately problematic eating behaviors. It is important to pay close attention to these as poor eating behaviors can cause some of the greatest challenges with respect to improve one's health and fitness.";
	
	$bul1 = "Check out the Eating Behaviors module for tips that will help you improve your eating habits!";
	
	$bul2 = "Talk with your trainer about your diet and eating habits, they can help you take control over negative habits resulting in healthier eating.";
}
elseif ($_SESSION['ebi_score']['concern'] == "LOW") { $scale1_color = "ssi_green"; 
	$nar = "You do not appear to have problematic eating behaviors. Eating behaviors can change over time and it is important that you continue to eat in a healthy manner, maintaining realistic expectations and goals for yourself and your body."; 
	
	$bul1 = "Check out the Eating Behaviors module for tips that will help you maintain your healthy eating habits!";
	
	$bul2 = "If your eating habits change suddenly or during times of stress or emotional turbulence, talk with your trainer about this change right away.";
}




// Body Image
if ($_SESSION['bia_score']['concern'] == "HIGH") { $scale1_color = "ssi_red"; 
	$nar = "You appear to have considerable negative body image issues at this time. Negative body image can have serious impact on a person's ability to reach their health and fitness goals as one sometimes undermines their own efforts or has unrealistic or unhealthy expectations.";
	
	$bul1 = "Read the included Body Image module for more info about negative body image and exercises and tips that will help you work through this issue.";
	
	$bul2 = "Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.";
				
}
elseif ($_SESSION['bia_score']['concern'] == "MED") { $scale1_color = "ssi_yellow"; 
	$nar = "You appear to have moderate negative body image issues at this time. Poor body image can make successfully reaching one's health and fitness goals very challenging as one might unintentionally undermine their own efforts or have unrealistic or unhealthy expectations.";
	
	$bul1 = "Read the included Body Image module for more info about negative body image and exercises and tips that will help you work through this issue.";
	
	$bul2 = "Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.";
}
elseif ($_SESSION['bia_score']['concern'] == "LOW") { $scale1_color = "ssi_green"; 
	$nar = "You do not appear to have a negative body image at this time. Positive body image is a very important element in successfully reaching one's health and fitness goals as you are able to be accepting and appreciative of your body and more able to make realistic and healthy goals."; 
	
	$bul1 = "Read the included Body Image module for tips on maintaining your already positive body image!";
	
	$bul2 = "Talk with your trainer about the way you perceive your physical appearance and body functioning. It is important that they know how you see yourself.";
}




// Prevalence of Stress
if ($_SESSION['posi_score']['concern'] == "HIGH") { $scale1_color = "ssi_red"; 
	$nar = "You appear to be experiencing high levels of stress at this time. This level of stress can be very detrimental to your success in reaching your health and fitness goals in addition to causing a multitude of emotional and physical problems.";
	
	$bul1 = "Check out the attached Prevalence of Stress module for exercises and tips that will help you reduce the impact of stressors in your life.";
	

	$bul2 = "Your trainer needs to be aware of the stressors that are most prevalent in your life in order to help you achieve the results you are working for.";
				
}
elseif ($_SESSION['posi_score']['concern'] == "MED") { $scale1_color = "ssi_yellow"; 
	$nar = "You appear to be experiencing moderate levels of stress at this time. Although a little stress can be a good motivator, even moderate stress can be detrimental to your success in reaching your health and fitness goals in addition to causing a multitude of emotional and physical problems.";
	
	$bul1 = "Check out the attached Prevalence of Stress module for exercises and tips that will help you reduce the impact of stressors in your life.";
	
	$bul2 = "Your trainer needs to be aware of the stressors that are most prevalent in your life in order to help you achieve the results you are working for.";
}
elseif ($_SESSION['posi_score']['concern'] == "LOW") { $scale1_color = "ssi_green"; 
	$nar = "You do not appear to be experiencing high levels of stress at this time. On a daily basis, you may be faced with stressful events and your overall stress levels can change significantly moment by moment. Pay attention to your stress levels as these can negatively impact your success with health and fitness goals."; 
	
	$bul1 = "Stay mindful of stressful events in your life because stress levels can ebb and flow. If you start feeling overwhelmed, work through the Stress module. ";
	
	$bul2 = "If you feel that your stress is getting out of control, talk with our trainer about how to reduce stress and prioritize goals to keep things manageable.";
}




// Depression
if ($_SESSION['bdsi_score']['concern'] == "HIGH") { $scale1_color = "ssi_red"; 
	$nar = "You appear to be experiencing high levels of depression at this time. Serious depression can create a multitude of challenges for people trying to improve their health and fitness as many depressive symptoms are polar opposites from what is generally needed to improve these things.";
	
	$bul1 = "Check out the Depression module for critical tips and exercises that will help you elevate your mood and your motivation!";
	
	$bul2 = "Talk with your trainer about your depressive symptoms as soon as possible. Let them help support you during emotional turbulence!";
				
}
elseif ($_SESSION['bdsi_score']['concern'] == "MED") { $scale1_color = "ssi_yellow"; 
	$nar = "You appear to be experiencing moderate levels of depression at this time. Moderate depression can create a variety of challenges for someone trying to improve upon their health and fitness as many depressive symptoms are polar opposites for what is generally needed to make positive change.";
	
	$bul1 = "Check out the Depression module for critical tips and exercises that will help you elevate your mood and your motivation!";
	
	$bul2 = "Talk with your trainer about your depressive symptoms as soon as possible. Let them help support you during emotional turbulence!";
}
elseif ($_SESSION['bdsi_score']['concern'] == "LOW") { $scale1_color = "ssi_green"; 
	$nar = "You do not appear to be experiencing depression at this time. Many things can cause depressive symptoms and for many these symptoms ebb and flow. Pay attention to yourself, keeping mindful of depressive symptoms as these can have a very negative impact on your ability so successfully reach your health and fitness goals."; 
	
	$bul1 = "You may not be suffering from it now, but be on the lookout for feelings of depression! If you feel depressed, work through the Depression module.";
	
	$bul2 = "If you think you may be experiencing symptoms of depression, talk to your trainer about how you are feeling and work some things out in your session.";
}




// Anxiety
if ($_SESSION['basi_score']['concern'] == "HIGH") { $scale1_color = "ssi_red"; 
	$nar = "You appear to be experiencing high levels of anxiety at this time. High anxiety can seriously hinder your ability to successfully reach your health and fitness goals as you may feel too anxious to actually take the necessary steps toward your goals.";
	
	$bul1 = "Check out the Anxiety module for more info about exercises and tips that will help you work through your anxiety.";
	
	$bul2 = "Let your trainer know if you are feeling anxious during or between sessions. They need to be aware of your anxiety in order to help you.";
				
}
elseif ($_SESSION['basi_score']['concern'] == "MED") { $scale1_color = "ssi_yellow"; 
	$nar = "You appear to be experiencing moderate levels of anxiety at this time. Too much anxiety can make it challenging for you to successfully reach your health and fitness goals as you may feel too anxious to actually take the necessary steps toward your goals.";
	
	$bul1 = "Check out the Anxiety module for more info about exercises and tips that will help you work through your anxiety.";
	
	$bul2 = "Let your trainer know if you are feeling anxious during or between sessions. They need to be aware of your anxiety in order to help you.";
}
elseif ($_SESSION['basi_score']['concern'] == "LOW") { $scale1_color = "ssi_green"; 
	$nar = "You do not appear to be experiencing serious anxiety at this time. However, many things can cause people anxiety and it is important that you pay attention to your anxiety levels as too much anxiety can hinder your ability to successfully reach your health and fitness goals."; 
	
	$bul1 = "You may not be suffering from it now, but be on the lookout for feelings of worry and anxiety! If you feel anxious, work through the Anxiety module.";
	
	$bul2 = "If you think you may be experiencing symptoms of anxiety, talk to your trainer about how you are feeling and work some things out in your session.";

}









