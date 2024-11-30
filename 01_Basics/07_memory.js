// Early languages or starting language like C etc. theire are memory reserved and free 
// this both work are programmers doing This are very difficult and time consuming

// Memory are Two Types
      // 1) Stack (Premitive) (we get Copy), 
      // 2) Heap(Non-Premitive) (We get reference)


      let myName = "chintamanitare"  // Premitive

      let anothername = myName
      anothername = "tare"

      console.log(myName);
      console.log(anothername);

      let userOne = {                    // Foe HEAP
        email: "user@google.com",
        upi: "user@ybl"
      }

      let userTwo = userOne

      userTwo.email = "chintamani@google.com"

      console.log(userOne.email);
      console.log(userTwo.email);
