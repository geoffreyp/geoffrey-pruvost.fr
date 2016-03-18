$(function(){
      $().timelinr({
         orientation: 'horizontal',
         // value: horizontal | vertical, default to horizontal
         containerDiv: '#timeline',
         // value: any HTML tag or #id, default to #timeline
         datesDiv: '#dates',
         // value: any HTML tag or #id, default to #dates
         datesSelectedClass: 'selected',
         // value: any class, default to selected
         datesSpeed: 500,
         // value: integer between 100 and 1000 (recommended), default to 500 (normal)
         issuesDiv : '#issues',
         // value: any HTML tag or #id, default to #issues
         issuesSelectedClass: 'selected',
         // value: any class, default to selected
         issuesSpeed: 200,
         // value: integer between 100 and 1000 (recommended), default to 200 (fast)
         issuesTransparency: 0.2,
         // value: integer between 0 and 1 (recommended), default to 0.2
         issuesTransparencySpeed: 500,
         // value: integer between 100 and 1000 (recommended), default to 500 (normal)
         prevButton: '#prev',
         // value: any HTML tag or #id, default to #prev
         nextButton: '#next'
         // value: any HTML tag or #id, default to #next
      });
   });