(() => {
  // Alias type
  type UserID = string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';
  // not valid, 's' is lowercase
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    console.log(userId)
    if (typeof userId === 'string') {
      console.log(userId.toUpperCase(), size)
    }
  }

  greeting('Arath', 'M')
})();
