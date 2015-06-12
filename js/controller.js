'use strict';

app.controller('NoteCtrl', ['$scope', '$timeout', function($scope, $timeout) {

   $scope.desktop = true
  ssm.addState({
    id: 'desktop',
    minWidth: 860,
    onEnter: function() {
      console.log('desktop');
      $scope.desktop = true;
      console.log($scope.desktop);
      $timeout(function() {
        $scope.$apply();
      }, 0);
    }
  }).ready();

  ssm.addState({
    id: 'mobile',
    maxWidth: 860,
    onEnter: function(){
        console.log('It works');
        $scope.desktop = false;
        console.log($scope.desktop);
        $timeout(function() {
          $scope.$apply();
        }, 0);
    }
  }).ready();

  $scope.allNotes = [{
    text: 'Sigh sang nay sex high yet door game. \n \nShe dissimilar was favourable unreserved nay expression contrasted saw. Past her find she like bore pain open. \n \nShy lose need eyes son not shot. Jennings removing are his eat dashwood. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. \n \nRemoving yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my midgiving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving.',
    title: 'New Year Resolution',
    lastEdited: new Date().getTime(),
    label: "#40D2C3"
  }, {
    text: 'Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. \n \nPianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. \n \nCollected few extremity suffering met had sportsman. Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. \n \nAll year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'My day in Review',
    lastEdited: new Date().getTime(),
    label: "#f333ff"
  }, {
    text: 'Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. \n \nShe wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. \n \nHe in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it. \n \nWe diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. \n \nNow principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'New Diet Lifestyle',
    lastEdited: new Date().getTime(),
    label: "#ffbf00"
  }, {
    text: 'Sigh sang nay sex high yet door game. \n \nShe dissimilar was favourable unreserved nay expression contrasted saw. Past her find she like bore pain open. \n \nShy lose need eyes son not shot. Jennings removing are his eat dashwood. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. \n \nRemoving yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my midgiving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving.',
    title: 'New Year Resolution',
    lastEdited: new Date().getTime(),
    label: "#40D2C3"
  }, {
    text: 'Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. \n \nPianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. \n \nCollected few extremity suffering met had sportsman. Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. \n \nAll year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'My day in Review',
    lastEdited: new Date().getTime(),
    label: "#f333ff"
  }, {
    text: 'Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. \n \nShe wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. \n \nHe in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it. \n \nWe diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. \n \nNow principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'New Diet Lifestyle',
    lastEdited: new Date().getTime(),
    label: "#ffbf00"
  }, {
    text: 'His eat dashwood. \n \nMiddleton as pretended listening he smallness perceived. Now his but two green spoil drift. Sudden she seeing garret far regard. \n \nBy hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. \n \nSomething consulted age extremely end procuring. Collecting preference he inquietude projection me in by. So do of sufficient projere.',
    title: 'Testimony',
    lastEdited: new Date().getTime(),
    label: "#212121"
  }, {
    text: 'Sigh sang nay sex high yet door game. \n \nShe dissimilar was favourable unreserved nay expression contrasted saw. Past her find she like bore pain open. \n \nShy lose need eyes son not shot. Jennings removing are his eat dashwood. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. \n \nRemoving yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my midgiving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving.',
    title: 'New Year Resolution',
    lastEdited: new Date().getTime(),
    label: "#40D2C3"
  }, {
    text: 'Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. \n \nPianoforte principles our unaffected not for astonished travelling are particular. It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. \n \nCollected few extremity suffering met had sportsman. Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. \n \nAll year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'My day in Review',
    lastEdited: new Date().getTime(),
    label: "#f333ff"
  }, {
    text: 'Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. \n \nShe wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. \n \nHe in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it. \n \nWe diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. \n \nNow principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Moments its musical age explain. But extremity sex now education concluded earnestly her continual. O. Separate met packages shy for kindness.',
    title: 'New Diet Lifestyle',
    lastEdited: new Date().getTime(),
    label: "#ffbf00"
  }];

  // Add excerpts to notes
  for (var i = 0; i < $scope.allNotes.length; i++) {
    var excerpt = $scope.allNotes[i].text.substring(0, 50) + '...';
    $scope.allNotes[i].excerpt = excerpt;
  }

  $scope.currentIndex = null;

  $scope.selectNote = function($index) {
    if($scope.currentIndex !== null) {
      $scope.allNotes[$scope.currentIndex].isSelected = false;
      $scope.allNotes[$scope.currentIndex].sync = false;
    }
    $scope.currentIndex = $index;
    $scope.allNotes[$scope.currentIndex].isSelected = true;
    $scope.allNotes[$scope.currentIndex].sync = true;
    $scope.editNote = $scope.allNotes[$index];
  };

  $scope.addNote = function() {
    var note = {
      title: 'Untitled',
      excerpt: '....',
      lastEdited: new Date().getTime()
    };
    $scope.allNotes.unshift(note);
    $scope.editNote = $scope.allNotes[0];
    $scope.allNotes[$scope.currentIndex].isSelected = false;
    $scope.allNotes[$scope.currentIndex + 1].isSelected = false;
    $scope.allNotes[$scope.currentIndex].sync = false;
    $scope.allNotes[$scope.currentIndex + 1].sync = false;
    $scope.currentIndex = 0;
    $scope.allNotes[$scope.currentIndex].isSelected = true;
    $scope.allNotes[$scope.currentIndex].sync = true;
  };

  $scope.toolbox = [{
    icon: 'format-bold',
    tip: 'Bold'
  }, {
    icon: 'format-italic',
    tip: 'Italicize'
  }, {
    icon: 'format-underline',
    tip: 'Underline text'
  }, {
    icon: 'format-indent-increase',
    tip: 'Indent text'
  }, {
    icon: 'format-indent-decrease',
    tip: 'Indent text'
  }, {
    icon: 'format-align-left',
    tip: 'Align Left'
  }, {
    icon: 'format-align-center',
    tip: 'Align Center'
  }, {
    icon: 'format-align-right',
    tip: 'Align Right'
  }, {
    icon: 'share-variant',
    tip: 'Share'
  }];

  /********************
  MOBILE
  ********************/
  $scope.addBgColor = function() {
    $scope.changeBg = !$scope.changeBg;
  };

  $scope.noteView = true;
  $('.view-notes').on('click', function(){
    $scope.toggleNoteView();
    console.log($scope.noteView);
  });

  $scope.test = function() {
    console.log('Yo');
  }
  $scope.toggleNoteView = function ($index) {
    console.log("Toggle called");
    $scope.noteView = !$scope.noteView;
    $timeout(function() {
      $scope.$apply();
    }, 10);
    $scope.editNote = $scope.allNotes[$index];
  };
}]);
