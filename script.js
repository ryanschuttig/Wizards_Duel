function start() {
    const charScreen = document.querySelector('.charScreen');
    charScreen.style.display = charScreen.style.display === 'block' ? 'none' : 'block';
  }

// function displayChar() {
//     const displayChar = document.querySelector('.displayChar');
//     displayChar.style.display = displayChar.style.display === 'block' ? 'none' : 'block';
// }

  var Characters = [
    {
        name:  "Harry Potter",
        hitPoints: 150,
        counterattack: 20,
        picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.independent.co.uk%2Farts-entertainment%2Fbooks%2Fharry-potter-jk-rowling-23-things-didn-t-know-a7849206.html&psig=AOvVaw1Qa1Irx6jKBIB52Le9swIS&ust=1640471668127000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjtqqq__fQCFQAAAAAdAAAAABAJ"
    },
  ]