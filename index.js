function theBeatlesPlay(musicians, instruments){
  var array = [`"John Lennon plays guitar"`];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + "plays" + instruments[i])
  }
  return array
}

