module.exports = {
    buildReport: function(type, getsModule) {
        var finalReport = {};
        if (type === 'rcq') {
            finalReport.title = 'Readiness to Change'
            finalReport.intro = 'Change is a complex process, which depends on an individual’s awareness of the need for change and their desire to make change. This process also can be heavily influenced by an individual’s emotional state. If someone is having problems with depression, hopelessness, anxiety, or experiencing high levels of stress, this may negatively impact their ability to effectively create change in their lives. Additionally, if someone is struggling with poor body image or poor self-esteem, making changes related to health and fitness can seem especially challenging. The change process is thought of in terms of stages, where the stages represent specific groupings of attitudes, beliefs, intentions, and behaviors related to an individual’s readiness in the cycle of change. Change is a phenomenon that unfolds over time and each stage reflects not only a period of time but also a set of tasks required for movement to the next stage. Although the time an individual spends in each stage varies, the tasks to be accomplished are assumed to be consistent and stable across most. Change unfolds over a series of five stages: precontemplation, contemplation, preparation, action, and maintenance.';
            finalReport.header2 = 'WHY IS IT IMPORTANT TO UNDERSTAND THE STAGES OF CHANGE WITH RELATION TO HEALTH & FITNESS';
            finalReport.section1 = 'Making and maintaining change is a critical part of reaching health and wellness goals. Your readiness for change and desire to make change is one of the most important elements in determining whether or not you will successfully reach these goals. Understanding the stages of change and which stage you are in, helps you to better understand your next steps.'
        }
        
        
        
        return finalReport;
    }
}