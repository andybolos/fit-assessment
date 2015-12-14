app.service('assessments', function() {
    var assessments = [{
        id: "basi",
        questions: [{
            "item_id": "basi_item_01",
            "item_text": "I have felt anxious for the last six months."
        }, {
            "item_id": "basi_item_02",
            "item_text": "For the last 6 months I have been very worried about almost everything in my life."
        }, {
            "item_id": "basi_item_03",
            "item_text": "I have a hard time controlling my worry."
        }, {
            "item_id": "basi_item_04",
            "item_text": "I am irritable much of the time."
        }, {
            "item_id": "basi_item_05",
            "item_text": "My muscles often feel tense. "
        }, {
            "item_id": "basi_item_06",
            "item_text": "People tell me to relax more often."
        }, {
            "item_id": "basi_item_07",
            "item_text": "I don't get as much done as I could because I worry too much."
        }, {
            "item_id": "basi_item_08",
            "item_text": "A good word to describe my behavior most of the time would be restless."
        }, {
            "item_id": "basi_item_09",
            "item_text": "I worry excessively about multiple things."
        }]
    }, {
        id: "bia",
        questions: [{
            "item_id": "bia_item_01",
            "item_text": "I am too fat and overweight."
        }, {
            "item_id": "bia_item_02",
            "item_text": "I am not content with my body."
        }, {
            "item_id": "bia_item_03",
            "item_text": "My body is not the right shape or size."
        }, {
            "item_id": "bia_item_04",
            "item_text": "My life would be better if I were thinner."
        }, {
            "item_id": "bia_item_05",
            "item_text": "My body has an odd or funny shape."
        }, {
            "item_id": "bia_item_06",
            "item_text": "I do not like the shape of my body. "
        }, {
            "item_id": "bia_item_07",
            "item_text": "There are certain aspects of my body that I find disgusting (e.g., body hair, sweating, scars, body odor)."
        }, {
            "item_id": "bia_item_08",
            "item_text": "I am embarassed by certain characteristics of my body (e.g., body hair, sweating, scars, body odor)."
        }, {
            "item_id": "bia_item_09",
            "item_text": "I am undesirable."
        }, {
            "item_id": "bia_item_10",
            "item_text": "I spend a lot of time telling myself negative things about my body."
        }, {
            "item_id": "bia_item_11",
            "item_text": "I hate how I look."
        }, {
            "item_id": "bia_item_12",
            "item_text": "I am ugly."
        }, {
            "item_id": "bia_item_13",
            "item_text": "I am preoccupied with thoughts of how flabby or unfit I am."
        }, {
            "item_id": "bia_item_14",
            "item_text": "I am obsessed with improving my health and fitness because I hate my body."
        }, {
            "item_id": "bia_item_15",
            "item_text": "I have low self-esteem because I don't like my body."
        }, {
            "item_id": "bia_item_16",
            "item_text": "The shame I feel about my body keeps me from doing things I enjoy."
        }, {
            "item_id": "bia_item_17",
            "item_text": "I often feel sad because I don't like my body."
        }, {
            "item_id": "bia_item_18",
            "item_text": "I am angry that my body is so misshapen."
        }, {
            "item_id": "bia_item_19",
            "item_text": "I feel helpless in making positive changes to my body."
        }, {
            "item_id": "bia_item_20",
            "item_text": "I am often disgusted when I see my body."
        }, {
            "item_id": "bia_item_21",
            "item_text": "I feel embarrassed by my body."
        }, {
            "item_id": "bia_item_22",
            "item_text": "I go out of my way to avoid seeing myself (i.e., in mirrors or reflective surfaces)."
        }, {
            "item_id": "bia_item_23",
            "item_text": "I often touch or poke at my body, especially the part(s) that I most dislike."
        }, {
            "item_id": "bia_item_24",
            "item_text": "I avoid situations in which others may see me without all of my clothes (e.g., in a swimsuit)."
        }, {
            "item_id": "bia_item_25",
            "item_text": "I camouflage or hide the part(s) of my body I dislike."
        }, {
            "item_id": "bia_item_26",
            "item_text": "I limit my interaction with others in order to hide my defects."
        }, {
            "item_id": "bia_item_27",
            "item_text": "I avoid leaving the house as much as possible because of my body."
        }, {
            "item_id": "bia_item_28",
            "item_text": "I am uncomfortable being out in public areas."
        }, {
            "item_id": "bia_item_29",
            "item_text": "When I interact with people, I feel anxious."
        }, {
            "item_id": "bia_item_30",
            "item_text": "I avoid situations where lots of people might notice me."
        }]
    }, {
        id: "rcq",
        questions: [{
            "item_id": "rcq_item_01",
            "item_text": "I don't feel that I have any problems that need changing."
        }, {
            "item_id": "rcq_item_02",
            "item_text": "There is nothing in my life that I want to change."
        }, {
            "item_id": "rcq_item_03",
            "item_text": "My family or friends have been pressuring me to make positive changes in my life."
        }, {
            "item_id": "rcq_item_04",
            "item_text": "I am considering making some positive changes in my life."
        }, {
            "item_id": "rcq_item_05",
            "item_text": "I have been thinking seriously about how to make the changes I want in my life."
        }, {
            "item_id": "rcq_item_06",
            "item_text": "I am not strongly committed to making any positive changes right now."
        }, {
            "item_id": "rcq_item_07",
            "item_text": "I am taking small steps toward making the changes I want in my life."
        }, {
            "item_id": "rcq_item_08",
            "item_text": "I am ready to make change and am preparing to do so."
        }, {
            "item_id": "rcq_item_09",
            "item_text": "I am committed to making the changes I need in my life."
        }, {
            "item_id": "rcq_item_10",
            "item_text": "I am currently making changes in my life."
        }, {
            "item_id": "rcq_item_11",
            "item_text": "I know the changes I've made are noticeable, because others have commented on them."
        }, {
            "item_id": "rcq_item_12",
            "item_text": "I work hard to make meaningful changes in my life."
        }, {
            "item_id": "rcq_item_13",
            "item_text": "I work hard to make sure I don't revert back to old behaviors once I've made changes."
        }, {
            "item_id": "rcq_item_14",
            "item_text": "I am usually effective at maintaining changes once I have been doing them for a few months."
        }, {
            "item_id": "rcq_item_15",
            "item_text": "I try to stay motivated to maintain the change I have made."
        }]

    }, {
        id: "bdsi",
        questions: [{
            "item_id": "bdsi_item_01",
            "item_text": "I don't enjoy doing things I used to do."
        }, {
            "item_id": "bdsi_item_02",
            "item_text": "I have little interest in things that used to make me happy."
        }, {
            "item_id": "bdsi_item_03",
            "item_text": "I have been very fidgety and restless lately. "
        }, {
            "item_id": "bdsi_item_04",
            "item_text": "I feel hopeless much of the time."
        }, {
            "item_id": "bdsi_item_05",
            "item_text": "I see myself as a failure."
        }, {
            "item_id": "bdsi_item_06",
            "item_text": "I don't think I have measured up in life."
        }, {
            "item_id": "bdsi_item_07",
            "item_text": "I have had a hard time concentrating on simple tasks like reading or watching TV."
        }, {
            "item_id": "bdsi_item_08",
            "item_text": "Even when things are going right, I feel sad and depressed."
        }, {
            "item_id": "bdsi_item_09",
            "item_text": "Over the last two weeks, I have felt mostly sad."
        }]

    }, {
        id: "ebi",
        questions: [{
            "item_id": " ebi_item_01",
            "item_text": "I do not eat a balanced diet."
        }, {
            "item_id": "ebi_item_02",
            "item_text": "I often eat more than I should in one sitting."
        }, {
            "item_id": "ebi_item_03",
            "item_text": "I skip breakfast or lunch more often than I should."
        }, {
            "item_id": "ebi_item_04",
            "item_text": "Sometimes I get dehydrated because I don't drink enough water."
        }, {
            "item_id": "ebi_item_05",
            "item_text": "I don't need to drink much water because of the other things I drink."
        }, {
            "item_id": "ebi_item_06",
            "item_text": "I often change up my diet by restricting different food groups or trying new diet plans."
        }, {
            "item_id": "ebi_item_07",
            "item_text": "I avoid eating even small amounts of some foods because I believe they will make me fat (i.e., 'carb-phobia')."
        }, {
            "item_id": "ebi_item_08",
            "item_text": "I have tried many 'fad' diets (e.g., South Beach, Jenny Craig, the Hollywood diet, etc)."
        }, {
            "item_id": "ebi_item_09",
            "item_text": "I usually eat dinner late in the evening."
        }, {
            "item_id": "ebi_item_10",
            "item_text": "I often snack after dark."
        }, {
            "item_id": "ebi_item_11",
            "item_text": "I sometimes refuse to eat in order to get or stay thin."
        }, {
            "item_id": "ebi_item_12",
            "item_text": "I avoid admitting I am hungry even when I haven't eaten."
        }, {
            "item_id": "ebi_item_13",
            "item_text": "I tell people I'm not hungry even when I really am."
        }, {
            "item_id": "ebi_item_14",
            "item_text": "I get upset if I don't count the calories and/or fat content in what I eat."
        }, {
            "item_id": "ebi_item_15",
            "item_text": "I eat until I am uncomfortable or in pain."
        }, {
            "item_id": "ebi_item_16",
            "item_text": "I often feel ill after eating because I ate too much."
        }, {
            "item_id": "ebi_item_17",
            "item_text": "I try to eat alone whenever possible."
        }, {
            "item_id": "ebi_item_18",
            "item_text": "I try to vomit after eating because I feel disgusted with myself."
        }, {
            "item_id": "ebi_item_19",
            "item_text": "Other people talk negatively about my eating habits."
        }, {
            "item_id": "ebi_item_20",
            "item_text": "I am ashamed of how much I eat."
        }, {
            "item_id": "ebi_item_21",
            "item_text": "I feel disgusted when I think about my eating habits."
        }, {
            "item_id": "ebi_item_22",
            "item_text": "I struggle with weight gain because I can't control how much I eat."
        }, {
            "item_id": "ebi_item_23",
            "item_text": "I have a hard time controlling what I eat."
        }, {
            "item_id": "ebi_item_24",
            "item_text": "I am embarrassed by how much I eat."
        }, {
            "item_id": "ebi_item_25",
            "item_text": "When I gorge myself on food I feel almost numb or like I am on 'auto-pilot.'"
        }, {
            "item_id": "ebi_item_26",
            "item_text": "I feel guilty and depressed about my overeating."
        }, {
            "item_id": "ebi_item_27",
            "item_text": "I use food to fill a void in my life."
        }, {
            "item_id": "ebi_item_28",
            "item_text": "I feel disgusted with myself because of my overeating."
        }, {
            "item_id": "ebi_item_29",
            "item_text": "I am usually 'on a diet.'"
        }, {
            "item_id": "ebi_item_30",
            "item_text": "I diet almost constantly."
        }, {
            "item_id": "ebi_item_31",
            "item_text": "I eat more than usual when I feel stressed, bored, or emotional."
        }, {
            "item_id": "ebi_item_32",
            "item_text": "When I have had a bad day, I often turn to food for comfort."
        }, {
            "item_id": "ebi_item_33",
            "item_text": "Snacking helps me control my stress or emotions."
        }, {
            "item_id": "ebi_item_34",
            "item_text": "I have no control over my eating habits."
        }, {
            "item_id": "ebi_item_35",
            "item_text": "I cannot control how much I eat snacks or treats."
        }, {
            "item_id": "ebi_item_36",
            "item_text": "I don't believe that I could change my eating habits."
        }]

    }, {
        id: "posi",
        questions: [{
            "item_id": "posi_item_01",
            "item_text": "I am often overwhelmed and stressed out."
        }, {
            "item_id": "posi_item_02",
            "item_text": "I have been feeling stressed by the same things for quite some time."
        }, {
            "item_id": "posi_item_03",
            "item_text": "There are many things that cause stress in my life."
        }, {
            "item_id": "posi_item_04",
            "item_text": "I have recently suffered the death of a loved one."
        }, {
            "item_id": "posi_item_05",
            "item_text": "I recently lost my job."
        }, {
            "item_id": "posi_item_06",
            "item_text": "I recently went through a divorce or breakup."
        }, {
            "item_id": "posi_item_07",
            "item_text": "I often feel fatigued."
        }, {
            "item_id": "posi_item_08",
            "item_text": "My appetite has changed recently because of stress."
        }, {
            "item_id": "posi_item_09",
            "item_text": "Sometimes I feel too stressed out to sleep."
        }, {
            "item_id": "posi_item_10",
            "item_text": "My blood pressure is not at a healthy level."
        }, {
            "item_id": "posi_item_11",
            "item_text": "I am sometimes so stressed that I feel like I can't breathe."
        }, {
            "item_id": "posi_item_12",
            "item_text": "My body often aches or feels stiff because of stress."
        }, {
            "item_id": "posi_item_13",
            "item_text": "I regularly have an upset stomach due to stress."
        }, {
            "item_id": "posi_item_14",
            "item_text": "My weight has changed recently without much explanation."
        }, {
            "item_id": "posi_item_15",
            "item_text": "I get so stressed out that I feel pain, pressure or tightness in my chest."
        }, {
            "item_id": "posi_item_16",
            "item_text": "I am bothered by the stress in my life."
        }, {
            "item_id": "posi_item_17",
            "item_text": "I often feel depressed because I am so stressed out."
        }, {
            "item_id": "posi_item_18",
            "item_text": "I have felt depressed more than 6 of the last 14 days."
        }, {
            "item_id": "posi_item_19",
            "item_text": "I feel very anxious about the stressors in my life."
        }, {
            "item_id": "posi_item_20",
            "item_text": "I have felt anxious more than 6 of the last 14 days."
        }, {
            "item_id": "posi_item_21",
            "item_text": "I have had a panic attack recently."
        }, {
            "item_id": "posi_item_22",
            "item_text": "I am so overwhelmed by stress that I have a hard time getting things done."
        }, {
            "item_id": "posi_item_23",
            "item_text": "I often let the housework pile up because I'm too stressed to deal with it."
        }, {
            "item_id": "posi_item_24",
            "item_text": "I have little time for things like shopping, doing dishes, or laundry because I am too busy."
        }, {
            "item_id": "posi_item_25",
            "item_text": "I don't always have time for grooming (e.g., shaving, clipping nails, etc) because of the stressors in my life."
        }, {
            "item_id": "posi_item_26",
            "item_text": "Because of the things that stress me out, I have little time for social activities."
        }, {
            "item_id": "posi_item_27",
            "item_text": "I often feel too tired to go out and have fun because my day has been so stressful."
        }, {
            "item_id": "posi_item_28",
            "item_text": "My intimate relationships suffer because of my stress."
        }, {
            "item_id": "posi_item_29",
            "item_text": "I can't spend much time with friends lately because I am too busy."
        }, {
            "item_id": "posi_item_30",
            "item_text": "My friendships suffer because of my stress."
        }]
    }];

    this.getAssessment = function(id) {
        var results = assessments.filter(function(assessment) {
            return assessment.id === id;
        });

        return results[0];
    };

    this.getQuestion = function(quiz, id) {

        var leng = quiz.questions.length;

        if (id < quiz.questions.length) {
            return {
                q: quiz.questions[id],
                l: leng
            }
        } else {
            return false;
        }
    }


});
